"use client";

export default function User({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <h1>User</h1>
      <p>{id}</p>
    </main>
  );
}
