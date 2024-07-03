const fs = require('fs');
const path = require('path');

const logFolderPath = './log';

// ログフォルダが存在しない場合は作成する
if (!fs.existsSync(logFolderPath)) {
    fs.mkdirSync(logFolderPath);
}

// 現在の日時を取得する
const now = new Date();
const timestamp = now.toISOString().replace(/[-T:]/g, '').slice(0, -5); // YYYYMMDDTHHMMSS 形式のタイムスタンプ

// ファイル名を作成する
const filename = `${timestamp}.txt`;
const filePath = path.join(logFolderPath, filename);

// 空のファイルを生成する
fs.writeFileSync(filePath, '', (err) => {
    if (err) throw err;
    console.log(`${filename} を作成しました。`);
});
