interface SuccessResponse<T> {
  data: T;
  status: 'success';
}

interface ErrorResponse {
  error: string;
  status: 'error';
}

type NetworkResponse<T> = SuccessResponse<T> | ErrorResponse;

const CONTENT_TYPE = 'Content-Type';
const JSON_CONTENT = 'application/json';

const POST = async <T>(url: string, body: FormData | object): Promise<NetworkResponse<T>> => {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  });
  if (!result.ok) {
    return {
      status: 'error',
      error: 'Failed to complete the request',
    };
  }
  const jsonResult = await result.json();
  const data = jsonResult.response;
  return {
    status: 'success',
    data,
  };
};

const DELETE = async <T>(url: string, body?: object): Promise<NetworkResponse<T>> => {
  const result = await fetch(url, {
    method: 'DELETE',
    body: body ? JSON.stringify(body) : undefined});
  if (!result.ok) {
    return {
      status: 'error',
      error: 'Failed to delete the waypoint',
    };
  }
  const jsonResult = await result.json();
  const data = jsonResult.response;
  return {
    status: 'success',
    data,
  };
};

const GET = async <T>(url: string): Promise<NetworkResponse<T>> => {
  const result = await fetch(url);
  if (!result.ok) {
    return {
      status: 'error',
      error: 'Failed to get data',
    };
  }
  const jsonResult = await result.json();
  const data = jsonResult.response;
  return {
    status: 'success',
    data,
  };
};

export { POST, GET, DELETE };