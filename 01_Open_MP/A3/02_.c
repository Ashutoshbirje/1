#include <stdio.h>
#include <omp.h>
#include <stdlib.h>

#define MAX 2000 

int a[MAX][MAX];
int b[MAX][MAX];
int c[MAX][MAX];

void matrix_add(int n) {
    #pragma omp parallel for collapse(2)
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            c[i][j] = a[i][j] + b[i][j];
}

int main() {
    int sizes[] = {250, 500, 750, 1000, 2000};

    for (int t = 2; t <= 8; t *= 2) {
        omp_set_num_threads(t);
        printf("\nThreads: %d\n", t);

        for (int s = 0; s < 5; s++) {
            int n = sizes[s];

            // Initialize matrices
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) {
                    a[i][j] = rand() % 100;
                    b[i][j] = rand() % 100;
                }

            double start = omp_get_wtime();
            matrix_add(n);
            double end = omp_get_wtime();

            printf("Matrix Size: %d x %d, Time: %lf seconds\n",
                   n, n, end - start);
        }
    }
    return 0;
}
