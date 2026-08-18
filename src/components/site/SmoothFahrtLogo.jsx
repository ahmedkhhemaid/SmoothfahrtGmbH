import { Image } from "@/components/ui/image";
import { logoIcon } from "@/lib/companyInfo";

/**
 * SmoothFahrt brand monogram. The official asset is a white "SF" mark on a
 * solid black field; `mix-blend-screen` drops the black background so only the
 * white monogram renders against the site's dark surfaces.
 */
export default function SmoothFahrtLogo({ className = "h-9 w-9" }) {
  return (
    <Image
      src={logoIcon}
      alt="SmoothFahrt Logo"
      fittingType="fit"
      className={`${className} mix-blend-screen`}
    />
  );
}