import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json(
      { error: "El correo es obligatorio" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: "Suscripción exitosa" },
        { status: 200 }
      );
    } else {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Error al suscribirte" },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error al suscribirte:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
