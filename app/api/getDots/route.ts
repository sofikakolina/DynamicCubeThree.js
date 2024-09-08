import { NextResponse } from 'next/server';

// Функция для расчета координат 12 треугольников для куба
function calculateDots(height: number, width: number, length: number) {
  const vertices = [
    [0, 0, 0],         // 0 - нижний левый ближний угол
    [width, 0, 0],     // 1 - нижний правый ближний угол
    [width, height, 0],// 2 - верхний правый ближний угол
    [0, height, 0],    // 3 - верхний левый ближний угол
    [0, 0, length],    // 4 - нижний левый дальний угол
    [width, 0, length],// 5 - нижний правый дальний угол
    [width, height, length], // 6 - верхний правый дальний угол
    [0, height, length] // 7 - верхний левый дальний угол
  ];

  // Треугольники (по 2 на каждую из 6 граней куба)
  const triangles = [
    // Передняя грань
    [vertices[0], vertices[1], vertices[2]],
    [vertices[0], vertices[2], vertices[3]],
    // Задняя грань
    [vertices[4], vertices[5], vertices[6]],
    [vertices[4], vertices[6], vertices[7]],
    // Левая грань
    [vertices[0], vertices[3], vertices[7]],
    [vertices[0], vertices[7], vertices[4]],
    // Правая грань
    [vertices[1], vertices[2], vertices[6]],
    [vertices[1], vertices[6], vertices[5]],
    // Верхняя грань
    [vertices[2], vertices[3], vertices[7]],
    [vertices[2], vertices[7], vertices[6]],
    // Нижняя грань
    [vertices[0], vertices[1], vertices[5]],
    [vertices[0], vertices[5], vertices[4]]
  ];

  return triangles;
}

// Именованный экспорт для POST-запросов
export async function POST(request: Request) {
  const body = await request.json();
  const { height, width, length } = body;

  if (typeof height === 'number' && typeof width === 'number' && typeof length === 'number') {
    const triangles = calculateDots(height, width, length);
    return NextResponse.json({ triangles }, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Неверные данные. Требуются height, width и length как числа.' }, { status: 400 });
  }
}

