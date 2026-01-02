import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const redirect = (await searchParams).redirect;

  const redirectUrl = (Array.isArray(redirect) ? redirect[0] : redirect) || "";

  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Live Demo Preview</CardTitle>
          <CardDescription>
            Click the button below to open the live demo in a new tab
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {redirectUrl ? (
            <>
              <Button size="lg" className="w-full max-w-xs" asChild>
                <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
                  Open Live Demo
                </a>
              </Button>
              <p className="text-muted-foreground text-center text-xs">
                This will open the demo outside of CodeCanyon&apos;s iFrame so
                you can access all features without restrictions.
              </p>
            </>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-muted-foreground text-sm">
                {redirectUrl
                  ? "Invalid redirect URL. Please check the URL and try again."
                  : "No redirect URL configured. Please add the redirect parameter."}
              </p>
              <div className="bg-muted rounded-lg p-4 text-left">
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  Example URL format:
                </p>
                <code className="text-xs break-all">
                  ?redirect=https://demo.yourapp.com
                </code>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
