import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Folder, FileText, Upload, MoreVertical } from "lucide-react";

export default function SimpleDriveUI() {
  return (
    <main className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 space-y-4">
        <h2 className="text-xl font-semibold">My Drive</h2>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Folder className="mr-2 h-4 w-4" /> Files
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Upload className="mr-2 h-4 w-4" /> Uploads
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" /> Recent
          </Button>
        </nav>
      </aside>


      <section className="flex-1 p-6 flex flex-col">

        <div className="flex justify-between items-center mb-4">
          <Input placeholder="Search files..." className="w-1/3" />
          <div className="flex items-center gap-2">
            <Button>New Folder</Button>
            <Button variant="outline">Upload</Button>
            <Avatar>
              <img src="https://github.com/shadcn.png" alt="User" />
            </Avatar>
          </div>
        </div>

        <Tabs defaultValue="grid" className="flex-1 flex flex-col">
          <TabsList className="mb-4">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>


          <TabsContent value="grid" className="flex-1">
            <ScrollArea className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="hover:shadow-lg cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Folder className="h-8 w-8 text-blue-500 mb-2" />
                    <span>Folder {i + 1}</span>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea>
          </TabsContent>

          <TabsContent value="list" className="flex-1">
            <ScrollArea className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 border rounded-md hover:bg-muted"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="text-gray-500" />
                    <span>File_{i + 1}.pdf</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
