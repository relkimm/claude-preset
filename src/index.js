import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRESETS_DIR = path.join(__dirname, '..', 'presets');
const TARGET_DIR = path.join(process.cwd(), '.claude', 'commands');

const LANGUAGES = [
  { name: 'en', value: 'en' },
  { name: 'ko', value: 'ko' }
];

function log(message = '') {
  console.log(message);
}

function logStep(step, total, message) {
  const progress = chalk.dim(`[${step}/${total}]`);
  log(`  ${progress} ${message}`);
}

function logSuccess(message) {
  log(chalk.green(`  ✓ ${message}`));
}

function logInfo(message) {
  log(chalk.cyan(`  ℹ ${message}`));
}

function displayBanner() {
  log();
  log(chalk.cyan.bold('  claude-preset'));
  log(chalk.dim('  Install Claude Code command presets\n'));
}

function displayComplete(count, targetDir) {
  log();
  log(chalk.green.bold('  ✨ Successfully installed!'));
  log();
  log(chalk.white(`  ${chalk.bold(count)} presets → ${chalk.dim(targetDir)}`));
  log();
  log(chalk.dim('  Usage:'));
  log(chalk.white('    /commit    ') + chalk.dim('Generate commit message'));
  log(chalk.white('    /review    ') + chalk.dim('Code review'));
  log(chalk.white('    /ship      ') + chalk.dim('Pre-deploy pipeline'));
  log(chalk.dim('    ... and more'));
  log();
}

async function selectLanguage() {
  const { language } = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: 'Select language',
      choices: LANGUAGES,
      prefix: chalk.cyan('?')
    }
  ]);
  return language;
}

async function getAvailablePresets(lang) {
  const langDir = path.join(PRESETS_DIR, lang);
  const files = await fs.readdir(langDir);
  return files.filter(f => f.endsWith('.md')).map(f => ({
    name: f.replace('.md', ''),
    file: f
  }));
}

async function installAllPresets(lang) {
  const langDir = path.join(PRESETS_DIR, lang);
  const presets = await getAvailablePresets(lang);
  const total = presets.length;

  await fs.ensureDir(TARGET_DIR);

  log();
  logInfo(`Installing ${total} presets...`);
  log();

  let installed = 0;

  for (let i = 0; i < presets.length; i++) {
    const preset = presets[i];
    const sourcePath = path.join(langDir, preset.file);
    const targetPath = path.join(TARGET_DIR, preset.file);

    await fs.copy(sourcePath, targetPath);
    logStep(i + 1, total, `${preset.name}`);
    installed++;
  }

  return installed;
}

export async function run() {
  try {
    displayBanner();

    const lang = await selectLanguage();

    const langDir = path.join(PRESETS_DIR, lang);
    if (!await fs.pathExists(langDir)) {
      log(chalk.red('\n  Error: Presets not found.\n'));
      process.exit(1);
    }

    const installed = await installAllPresets(lang);
    displayComplete(installed, TARGET_DIR);

  } catch (error) {
    if (error.name === 'ExitPromptError') {
      log(chalk.dim('\n  Cancelled.\n'));
      process.exit(0);
    }
    log(chalk.red(`\n  Error: ${error.message}\n`));
    process.exit(1);
  }
}
