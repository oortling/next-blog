import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function ProfileCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>关于我</CardTitle>
          <CardDescription>
            后端工程师(逐渐全栈)、工具党、喜欢折腾
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-violet-800">欢迎来访 👏</p>
          <p className="text-violet-900">
            我是一名形而上学软件开发者，热爱开源软件和开源社区。
            <br />
          </p>
        </CardContent>
        <CardFooter>
          <div className="space-x-2 flex flex-wrap">
            <Badge>Compiler</Badge>
            <Badge>AGI</Badge>
            <Badge>Cycling</Badge>
            <Badge>Backend</Badge>
            <Badge>Nas</Badge>
            <Badge>PhotoGraphy</Badge>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
