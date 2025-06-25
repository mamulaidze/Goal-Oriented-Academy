import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Settings() {
  const [settings, setSettings] = useState({
    follow: true,
    answer: false,
    mention: true,
    launches: false,
    updates: false,
    newsletter: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card className="max-w-md mx-auto rounded-2xl shadow-md">
      <CardContent className="p-6 space-y-6">
        <h2 className="text-lg font-semibold">Platform Settings</h2>

        <div>
          <p className="text-sm text-muted-foreground font-semibold mb-2">Account</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>Email me when someone follows me</Label>
              <Switch
                checked={settings.follow}
                onCheckedChange={() => handleToggle("follow")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Email me when someone answers on my post</Label>
              <Switch
                checked={settings.answer}
                onCheckedChange={() => handleToggle("answer")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Email me when someone mentions me</Label>
              <Switch
                checked={settings.mention}
                onCheckedChange={() => handleToggle("mention")}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground font-semibold mb-2">Application</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label>New launches and projects</Label>
              <Switch
                checked={settings.launches}
                onCheckedChange={() => handleToggle("launches")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Monthly product updates</Label>
              <Switch
                checked={settings.updates}
                onCheckedChange={() => handleToggle("updates")}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Subscribe to newsletter</Label>
              <Switch
                checked={settings.newsletter}
                onCheckedChange={() => handleToggle("newsletter")}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
