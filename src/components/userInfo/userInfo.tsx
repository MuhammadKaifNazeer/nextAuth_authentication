import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserInfo() {
  return (
    <Card className="min-w-[15rem]">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Username</CardTitle>
        <CardDescription>user@email.com</CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button className="w-full">Logout</Button>
      </CardContent>
    </Card>
  );
}
