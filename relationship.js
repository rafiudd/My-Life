#!/usr/bin/env node

import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

console.log(chalk.cyan.bold('==================================='));
console.log(chalk.cyan.bold(' Relationship Review CLI v1.3'));
console.log(chalk.cyan.bold('===================================\n'));

const state = {
  feelings: false,
  effort: false,
  expectation: 'rendah',
};

function tanya(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(chalk.white(pertanyaan), (jawaban) =>
      resolve(jawaban.trim().toLowerCase())
    );
  });
}

(async function run() {
  // INPUT
  state.feelings = (await tanya('Masih ada perasaan? (ya/tidak): ')) === 'ya';
  state.effort = (await tanya('Sudah usaha maksimal? (ya/tidak): ')) === 'ya';
  state.expectation = await tanya(
    'Tingkat ekspektasi? (rendah/sedang/tinggi): '
  );

  console.log(chalk.gray('\n> Memproses jawaban...'));
  await sleep(1200);

  console.log(chalk.blue('\n> Mengecek status komunikasi...'));
  await sleep(1000);

  const waktuBalas = '2 hari yang lalu';
  console.log(
    chalk.white('  Balasan terakhir: ') + chalk.yellow(waktuBalas)
  );
  await sleep(1000);

  if (waktuBalas === '2 hari yang lalu') {
    console.log(
      chalk.yellow('  ⚠ Peringatan: dibaca tidak selalu berarti peduli')
    );
    await sleep(1200);
  }

  console.log(chalk.blue('\n> Mengevaluasi logika hubungan...'));
  await sleep(1000);

  console.log(
    '  Perasaan: ' +
      (state.feelings ? chalk.green('true') : chalk.red('false'))
  );
  await sleep(700);

  console.log(
    '  Usaha: ' +
      (state.effort ? chalk.green('true') : chalk.red('false'))
  );
  await sleep(700);

  console.log(
    '  Ekspektasi: ' + chalk.magenta(state.expectation)
  );
  await sleep(1000);

  if (state.feelings && state.effort) {
    console.log(
      chalk.red('  Hasil: statusHubungan = undefined')
    );
  } else {
    console.log(
      chalk.gray('  Hasil: statusHubungan = tidak aktif')
    );
  }

  await sleep(1500);

  console.log(chalk.blue('\n> Mencoba menyatakan perasaan...'));
  await sleep(1200);

  console.log(chalk.red('  ❌ Pernyataan perasaan gagal'));
  await sleep(800);
  console.log(chalk.green('  ✔ tetapSenyum() dijalankan'));

  await sleep(1500);

  console.log(chalk.blue('\n> Menjalankan evaluasi diri...'));
  await sleep(1200);

  if (state.expectation === 'tinggi') {
    console.log(chalk.yellow('  Overthinking++'));
  } else {
    console.log(chalk.green('  Overthinking terkendali'));
  }

  await sleep(1800);

  console.log(chalk.blue('\n> Output akhir:'));
  await sleep(1000);
  console.log(chalk.white('  Nice try.'));
  await sleep(1200);
  console.log(
    chalk.green('  Kamu terlalu baik buat dia 😊')
  );

  await sleep(1500);
  console.log(chalk.gray('\nProses selesai dengan kode keluar 0'));

  rl.close();
})();
