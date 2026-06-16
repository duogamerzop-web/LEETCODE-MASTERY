#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char* processStr(char* s) {
    int len = strlen(s);

    int cap = 1000000;   // big fixed buffer (important fix)
    char *res = (char*)malloc(cap);

    int top = -1;

    for(int i = 0; s[i] != '\0'; i++) {

        if(isalpha(s[i])) {
            res[++top] = s[i];
        }

        else if(s[i] == '*') {
            if(top != -1) top--;
        }

        else if(s[i] == '#') {
            int curr = top + 1;

            // SAFETY: prevent overflow
            if(curr * 2 + top >= cap) {
                free(res);
                return NULL; // or handle error
            }

            for(int j = 0; j < curr; j++) {
                res[++top] = res[j];
            }
        }

        else if(s[i] == '%') {
            int l = 0, r = top;
            while(l < r) {
                char t = res[l];
                res[l] = res[r];
                res[r] = t;
                l++; r--;
            }
        }
    }

    res[top + 1] = '\0';
    return res;
}