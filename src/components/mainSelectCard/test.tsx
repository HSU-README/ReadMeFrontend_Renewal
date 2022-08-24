import React, { useEffect } from 'react';

export default function TestCard({ data }: { data: DocumentType }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    // TODO link url 변경 필요
    <div>sdasdadada</div>
  );
}
