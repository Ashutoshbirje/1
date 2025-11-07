#include <stdio.h>
#include <omp.h>

#define MAX 1000000

int main() {
    int n;
    float scalar;
    float vec[MAX], result[MAX];

    printf("Enter size of vector: ");
    scanf("%d", &n);

    printf("Enter scalar value: ");
    scanf("%f", &scalar);

    for (int i = 0; i < n; i++) {
        vec[i] = i;
    }

    double start = omp_get_wtime();
    for (int i = 0; i < n; i++) {
        result[i] = vec[i] + scalar;
    }
    double end = omp_get_wtime();

    double start1 = omp_get_wtime();
    #pragma omp parallel for
    for (int i = 0; i < n; i++) {
        result[i] = vec[i] + scalar;
    }
    double end1 = omp_get_wtime();

    printf("Time taken: %lf seconds (Sequential)\n", end - start);
    printf("Time taken: %lf seconds (Parallel)\n", end1 - start1);
    printf("Speedup: %.3f\n", (end - start) / (end1 - start1));

    printf("Sample result:\n");
    for (int i = 0; i < (n < 10 ? n : 10); i++) {
        printf("%.2f ", result[i]);
    }
    printf("\n");

    return 0;
}
