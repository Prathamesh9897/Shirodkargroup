import { useState } from "react";

const CareersC = () => {
    const [activeJob, setActiveJob] = useState<number | null>(null);

    const jobs = [
        {
            title: "Sales Executive",
            desc: "Drive property sales by building client relationships.",
            location: "Mumbai, India",
        },
        {
            title: "Accounts Executive",
            desc: "Manage financial records and transactions.",
            location: "Mumbai, India",
        },
        {
            title: "Quantity Surveyor",
            desc: "Manage project costing and budgeting.",
            location: "Mumbai, India",
        },
        {
            title: "Marketing Executive",
            desc: "Develop marketing strategies and generate leads.",
            location: "Mumbai, India",
        },
        {
            title: "Site Engineer",
            desc: "Oversee construction and site operations.",
            location: "Mumbai, India",
        },
        {
            title: "Purchase Executive",
            desc: "Handle procurement and vendor coordination.",
            location: "Mumbai, India",
        },
    ];

    return (
        <main className="pt-24">
            <section className="max-w-6xl mx-auto px-6 py-20">

                {/* Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold">Careers</h1>
                    <p className="text-muted-foreground mt-4">
                        Join our team and help build the future of luxury living.
                    </p>
                </div>

                {/* Jobs */}
                <div className="space-y-8">
                    {jobs.map((job, i) => (
                        <div key={i} className="p-6 rounded-2xl border shadow">

                            <h3 className="text-xl font-semibold">{job.title}</h3>

                            <p className="text-sm text-muted-foreground mt-2">
                                {job.desc}
                            </p>

                            <p className="mt-3 text-sm font-medium text-primary">
                                📍 {job.location}
                            </p>

                            <button
                                onClick={() =>
                                    setActiveJob(activeJob === i ? null : i)
                                }
                                className="mt-4 px-4 py-2 bg-black text-white rounded-lg"
                            >
                                Apply Now
                            </button>

                            {activeJob === i && (
                                <p className="mt-3 text-sm text-green-600">
                                    📩 Send your resume to:{" "}
                                    <a
                                        href="mailto:hr@shirodkargroup.com"
                                        className="underline"
                                    >
                                        hr@shirodkargroup.com
                                    </a>
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
};

export default CareersC;