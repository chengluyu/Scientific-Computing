import numpy.matrixlib as matrix
import numpy.linalg as linalg

if __name__ == '__main__':
    A = matrix.matrix('1.5, 0.5; 0.5, 1.5')
    x = matrix.matrix('0; 1')

    B = A
    for i in range(0, 10):
        y = B * x
        print(i, y)
        B = B * A