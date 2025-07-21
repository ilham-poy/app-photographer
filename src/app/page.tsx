import Image from "next/image";
import RootLayout from "./layout";

import AllPage from "@/layouts/main";

export default function Root() {
  return (
    <RootLayout>
      <AllPage></AllPage>
    </RootLayout>

  );
}
