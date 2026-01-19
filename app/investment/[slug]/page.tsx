import { investmentProjects } from "@/data/investments";
import Media from "./components/Media";
import Overview from "./components/Overview";
import Summary from "./components/Summary";
import TabbedContent from "./components/TabbedContent";

export default async function InvestDetailPage({
  params,
}: {
  params: Promise<{ slug?: string }>;
}) {
  const { slug } = await params;
  const normalizedSlug = slug?.toLowerCase().replace(/\s+/g, "-") ?? "";
  const project =
    investmentProjects.find((item) => item.id === normalizedSlug) ??
    investmentProjects[0];
  return (
    <div className="min-h-screen bg-[#040B16] text-white py-10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 lg:items-start">
          <div className="space-y-6">
            <div className="lg:contents">
              <Overview project={project} />
              <Media cover={project.cover} gallery={project.gallery} />
            </div>
            <TabbedContent
              about={project.about}
              shortDescription={project.shortDescription}
            />
          </div>
          <Summary project={project} />
        </div>
      </div>
    </div>
  );
}
