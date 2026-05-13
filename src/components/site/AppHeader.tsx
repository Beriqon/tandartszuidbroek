import { SiteHeader } from "@/components/site/SiteHeader";
import { getTreatmentNavLinks } from "@/lib/treatment-nav-links";
import { mainNav, type NavItem } from "@/lib/site-config";

export async function AppHeader() {
  const treatmentLinks = await getTreatmentNavLinks();
  const alleBehandelingen = {
    label: "Alle behandelingen",
    href: "/behandelingen",
  } as const;

  const navItems: NavItem[] = mainNav.map((item) => {
    if (item.href !== "/behandelingen") return item as NavItem;
    return {
      label: item.label,
      href: item.href,
      children: [...treatmentLinks, alleBehandelingen],
    };
  });

  return <SiteHeader navItems={navItems} />;
}
