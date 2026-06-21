var licenseKeyFormatting = function(s, k) {
    let clean = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '-') {
            clean += s[i];
        }
    }
    clean = clean.toUpperCase();
    let ans = "";
    let first = clean.length % k;
    let i = 0;
    if (first > 0) {
        ans += clean.slice(0, first);
        i = first;
    }
    while (i < clean.length) {
        if (ans.length > 0) {
            ans += '-';
        }
        ans += clean.slice(i, i + k);
        i += k;
    }
    return ans;
};