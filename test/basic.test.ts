import { expect, test } from 'vitest';
import {FormatProp} from "../src/types";
import {formatText} from "../src/utils";

test.each<[FormatProp, string]>([
  [
    {
      date: '8/14/2022',
      content: 'reactのあれこれを解決する',
      purpose: 'バンドルによるwebページの初回ロード時間を短くしたい',
      place: 'リモート',
      time: '8/14/2022',
      concernedPerson: '佐藤　鈴木　井口',
      remarks: '事前に次の記事を読み込んでくる https://google.com/',
    },
    `作成日 2022年8月14日

内容:
    reactのあれこれを解決する
目的:
    バンドルによるwebページの初回ロード時間を短くしたい
場所:
    リモート
関係者:
    佐藤、鈴木、井口
備考:
    事前に次の記事を読み込んでくる https://google.com/
    `,
  ],
])('文字列から整形されたテキストを作る', (prop, output) => {
  expect(formatText(prop)).toBe(output);
});
