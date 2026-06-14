#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>
bool isPrefixString(char* s, char** words, int wordsSize) {
    int k = 0;

    for(int i = 0; i < wordsSize; i++) {
        for(int j = 0; words[i][j] != '\0'; j++) {
            if(s[k] == '\0' || s[k] != words[i][j]) {
                return false;
            }
            k++;
        }

        if(s[k] == '\0') {
            return true;
        }
    }

    return false;
}