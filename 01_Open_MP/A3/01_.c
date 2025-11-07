#include <stdio.h>
#include <omp.h>

#define MAX 100000  // Maximum size for vectors

int main() {
    int n;
    printf("Enter size of vectors (max %d): ", MAX);
    scanf("%d", &n);

    if (n > MAX) {
        printf("Error: Size exceeds maximum limit!\n");
        return 1;
    }

    int a[MAX], b[MAX];
    int dot_product = 0;

    printf("Enter elements of vector A:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &a[i]);

    printf("Enter elements of vector B:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &b[i]);

    double start = omp_get_wtime();

    #pragma omp parallel for reduction(+:dot_product)
    for (int i = 0; i < n; i++) {
        dot_product += a[i] * b[i];
    }

    double end = omp_get_wtime();

    printf("Minimum scalar product (dot product) = %d\n", dot_product);
    printf("Time taken: %lf seconds\n", end - start);

    return 0;
}
