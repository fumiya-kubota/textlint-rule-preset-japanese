// LICENSE : MIT
"use strict";
module.exports = {
    "rules": {
        "max-ten": require("textlint-rule-max-ten"),
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-doubled-joshi": require("textlint-rule-no-doubled-joshi"),
        "sentence-length": require("textlint-rule-sentence-length"),
        "no-start-duplicated-conjunction": require("textlint-rule-no-start-duplicated-conjunction"),
        "spellcheck-tech-word": require("textlint-rule-spellcheck-tech-word"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu")
    },
    "rulesConfig": {
        // https://github.com/azu/textlint-rule-max-ten
        // 一文で使える"、"の数
        "max-ten": {
            "max": 3
        },
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        // 二重否定の検出
        "no-double-negative-ja": true,
        // https://github.com/azu/textlint-rule-no-doubled-joshi
        // 二重助詞の検出
        // 連続して同じ助詞が出た場合のみを検出
        "no-doubled-joshi": {
            "min_interval": 1
        },
        // https://github.com/azu/textlint-rule-sentence-length
        // 一文の最大の長さ
        "sentence-length": {
            "max": 100
        },
        // https://github.com/azu/textlint-rule-no-start-duplicated-conjunction
        // 同じ接続詞で開始してないかを検出
        // 2文距離が空いていれば同じ接頭辞を使える
        "no-start-duplicated-conjunction": {
            "interval": 2
        },
        // https://github.com/azu/textlint-rule-spellcheck-tech-word
        // JavaScript周りの単語スペルチェック
        "spellcheck-tech-word": true,
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        // 文の敬体(ですます調)、常体(である調)のチェック
        "no-mix-dearu-desumasu": true
    }
};