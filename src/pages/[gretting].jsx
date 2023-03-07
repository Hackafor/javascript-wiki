import React from 'react';
import { useRouter } from 'next/router';

function Gretting() {
  const router = useRouter();
  const gretting = router.query.gretting;

  return <div>{gretting}</div>;
}

export default Gretting;
