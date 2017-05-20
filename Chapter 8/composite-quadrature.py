
from numpy import array

def composite_quadrature(f, a, b, k):
    h = (a - b) / k
    x = array([(a + j * h) for j in range(0, k + 1)])
    # M quadrature
    m_value = h * sum(map(f, (x[0:-1] + x[1:]) / 2))
    # T quadrature
    t_value = h * (0.5 * f(a) + sum(x[1:-1]) + 0.5 * f(b))

    print('M Composite Quadrature Value = %f' % m_value)
    print('T Composite Quadrature Value = %f' % t_value)

composite_quadrature(lambda x: x * x, -10, 10, 20)