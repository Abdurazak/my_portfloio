import ProjectSectionFeatured from "./project_section_featured";
import ProjectList from "./project_list";

export default function ProjectSection() {
  return (
    <section id="projects" className="min-h-screen w-3/4 flex flex-col items-center m-auto">
      <ProjectSectionFeatured image_url={'/images/bejae_feature_graphic.jpg'} image_alt={'Bejae Feature Image'} description={"Translated complex Figma designs into pixel-perfect, responsive Flutter UI for Bejae's device financing platform while architecting a scalable, feature-based structure that enhanced user engagement, modularity, and onboarding efficiency."} />
      <ProjectList projects={[
        {
          title: "Bejae",
          description: "Delivered responsive Flutter UI/UX for Bejae's device financing app using complex Figma designs, feature-based architecture, Flutter BLoC, and Dio for backend integration.",
          project_url: "https://play.google.com/store/apps/details?id=com.bejae.app"
        },
        {
          title: "EasyLoans Platform",
          description: "Redesigned UI/UX and implemented responsive design using Flutter. Built a full client reporting system using .NET Core backend and Flutter frontend.",
          project_url: "https://easyloans.co.za/"
        },
        {
          title: "Chegebeya Merchant App",
          description: "Developed the merchant app for the Chegebeya B2B platform and enhanced admin portal using Next.js and Tailwind CSS.",
          project_url: "https://chegebeya.com/"
        },
        {
          title: "Wanza Express",
          description: "Led full-stack development of courier and manifest systems using Next.js, PostgreSQL, Docker, and Keycloak-based auth.",
          project_url: "https://wanzaexpress.com/"
        },
        {
          title: "News & Entertainment App",
          description: "Rebuilt and redesigned a Flutter news app using feature-based architecture, Flutter BLoC, and Dio integration.",
          project_url: "https://addisradioperspective.wordpress.com/"
        },
        {
          title: "Axumite Ride",
          description: "Built driver and passenger ride-sharing apps using Flutter, with modular BLoC architecture and Dio integration."
        },
        {
          title: "GIZ Training App",
          description: "Created a training management app for GIZ Ethiopia with SQLite offline storage and MQTT real-time messaging."
        },
        {
          title: "SAMS-DSS",
          description: "Developed a beekeeping support app (SAMS-DSS) with secure Auth0 authentication and clean Flutter UI."
        },
        {
          title: "Easy Telecom",
          description: "Automated Ethio Telecom's USSD services in Flutter and added ML Kit-powered recharge card scanning."
        },
        {
          title: "Criboo",
          description: "Built an Airbnb-style app for guest house discovery using Java and a mobile-first design."
        }
      ]} />
    </section>
  );
}
