import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Do Nothing Button
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              The Button That Does Nothing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Sometimes the best action is no action at all. Go ahead, give it a try.
            </p>
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Click Me (I Do Nothing)
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/70 italic pt-8">
            Seriously, it really does nothing. That's the whole point.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Do Nothing Button. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'do-nothing-button'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-accent transition-colors underline decoration-accent/30 hover:decoration-accent"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
