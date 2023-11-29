// pages/index.tsx
import TableData from "@/app/components/TableData";

const Page = () => {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center space-x-8">
          <div>DashBoard</div>
          <div>PLayground</div>
        </div>
        <div>
          <button className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-900">
            Sign Out
          </button>
        </div>
      </div>
      <div className="px-1 py-4">
        <h1>Clients</h1>
        <h3>A list of clients contacts</h3>
        <TableData  />
      </div>
    </div>
  );
};

export default Page;
