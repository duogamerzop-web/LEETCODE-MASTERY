/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int num;
    int den;
    float val;
} Fraction;

int compare(const void *a, const void *b) {
    float fa = ((Fraction *)a)->val;
    float fb = ((Fraction *)b)->val;

    if (fa < fb) return -1;
    if (fa > fb) return 1;
    return 0;
}

int* kthSmallestPrimeFraction(int* arr, int arrSize, int k, int* returnSize) {
    Fraction *a = (Fraction *)malloc((arrSize * (arrSize - 1) / 2) * sizeof(Fraction));
    int b = 0;

    for (int i = 0; i < arrSize; i++) {
        for (int j = i + 1; j < arrSize; j++) {
            a[b].num = arr[i];
            a[b].den = arr[j];
            a[b].val = (float)arr[i] / arr[j];
            b++;
        }
    }

    qsort(a, b, sizeof(Fraction), compare);

    int *res = (int *)malloc(2 * sizeof(int));
    res[0] = a[k - 1].num;
    res[1] = a[k - 1].den;

    *returnSize = 2;
    return res;
}