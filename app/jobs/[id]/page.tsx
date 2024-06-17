"use client";

export default function Job({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main>
      <h1>Job</h1>
      <p>{id}</p>
    </main>
  );
}
