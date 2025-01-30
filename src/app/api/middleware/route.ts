import { NextRequest, NextResponse } from "next/server";

const backendBaseUrl = process.env.BACKEND_URL;

// Handler for POST requests
export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Path query parameter is required" },
        { status: 400 }
      );
    }

    // Extract the body
    const body = await req.json();

    // Forward request to the backend
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handler for GET requests
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Path query parameter is required" },
        { status: 400 }
      );
    }

    // Forward request to the backend
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "GET",
      cache: "no-cache",
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handler for PUT requests
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    const headers = req.headers;

    if (!path) {
      return NextResponse.json(
        { error: "Path query parameter is required" },
        { status: 400 }
      );
    }

    // Extract the body
    const body = await req.json();

    // Forward request to the backend
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handler for DELETE requests
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Path query parameter is required" },
        { status: 400 }
      );
    }

    // Forward request to the backend
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "DELETE",
      cache: "no-cache",
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handler for PATCH requests
export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get("path");

    if (!path) {
      return NextResponse.json(
        { error: "Path query parameter is required" },
        { status: 400 }
      );
    }

    // Extract the body
    const body = await req.json();

    // Forward request to the backend
    const response = await fetch(`${backendBaseUrl}${path}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
