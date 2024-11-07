import { getAuthUser } from "@/presenter/actions/auth-actions";
import { JobsView } from "@/presenter/features/job/views/jobs-view";
import { TechnicianJobsView } from "@/presenter/features/technician/views/technician-jobs-view";
export default async function Page() {
    const { data: user } = await getAuthUser();
    return user?.userType == "CUSTOMER" ? <JobsView /> : <TechnicianJobsView />;
}
