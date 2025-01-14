import Image from "next/image";
import { Button } from "../ui/button";
import { FileEdit, LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"; 

const SidebarMenu = () => {
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove("token")
    router.push("/")
  };

  return (
    <div className="w-64 bg-card p-6">
      <div className="mb-8 flex items-center justify-around space-x-4">
        <Image src="/LogoWhite.svg" width={50} height={50} alt="Logo" />
        <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
      </div>

      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start bg-gray-900">
          <FileEdit color="white" className="mr-2 h-4 w-4" />
          Meus formulários
        </Button>
      </nav>
      <div className="border-l border-border h-full ml-4 mt-4" />
    </div>
  );
};

export default SidebarMenu;
