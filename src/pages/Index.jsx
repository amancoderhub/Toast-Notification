import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/toast/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  Undo,
  Loader2,
  Settings,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Eye,
  Keyboard,
  MousePointer,
  Smartphone,
  Zap,
  Activity,
  Palette,
  Gift,
  Sparkles,
  Users,
  Clock,
  BarChart3,
} from "lucide-react";

const Index = () => {
  const { addToast, clearAllToasts, config, updateConfig } = useToast();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [promiseStatus, setPromiseStatus] = useState("idle");

  // Toast trigger functions
  const showSuccessToast = () => {
    addToast({
      type: "success",
      title: "Success!",
      message: "Your action was completed successfully.",
      duration: 5000,
    });
  };

  const showErrorToast = () => {
    addToast({
      type: "error",
      title: "Error occurred",
      message: "Something went wrong. Please try again.",
      duration: 6000,
    });
  };

  const showInfoToast = () => {
    addToast({
      type: "info",
      title: "Information",
      message: "Here is some useful information for you.",
      duration: 4000,
    });
  };

  const showWarningToast = () => {
    addToast({
      type: "warning",
      title: "Warning",
      message: "Please review your settings before continuing.",
      duration: 7000,
    });
  };

  const showActionToast = () => {
    addToast({
      type: "action",
      title: "File deleted",
      message: "document.pdf has been moved to trash.",
      undoAction: () => {
        addToast({
          type: "success",
          message: "File restored successfully!",
          duration: 3000,
        });
      },
      duration: 8000,
    });
  };

  const showLoadingToast = () => {
    const id = addToast({
      type: "loading",
      title: "Processing...",
      message: "Please wait while we process your request.",
      persistent: true,
    });

    // Simulate loading completion
    setTimeout(() => {
      clearAllToasts(); // Clear loading toast
      addToast({
        type: "success",
        title: "Completed!",
        message: "Your request has been processed successfully.",
        duration: 4000,
      });
    }, 3000);
  };

  const showPersistentToast = () => {
    addToast({
      type: "persistent",
      title: "Persistent Notice",
      message: "This toast will stay until manually dismissed.",
      persistent: true,
    });
  };

  const showPromiseDemo = async () => {
    setPromiseStatus("pending");

    const loadingId = addToast({
      type: "loading",
      title: "Promise Demo",
      message: "Simulating async operation...",
      persistent: true,
    });

    try {
      // Simulate async operation
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.3 ? resolve(true) : reject(new Error("Demo error"));
        }, 2000);
      });

      clearAllToasts(); // Clear loading toast
      setPromiseStatus("success");
      addToast({
        type: "success",
        title: "Promise Resolved",
        message: "Async operation completed successfully!",
        duration: 4000,
      });
    } catch (error) {
      clearAllToasts(); // Clear loading toast
      setPromiseStatus("error");
      addToast({
        type: "error",
        title: "Promise Rejected",
        message: "Async operation failed. Please try again.",
        duration: 5000,
      });
    } finally {
      setPromiseStatus("idle"); // Reset status
    }
  };

  const showBatchToasts = () => {
    const messages = [
      "First notification in batch",
      "Second notification in batch",
      "Third notification in batch",
    ];

    messages.forEach((message, index) => {
      setTimeout(() => {
        addToast({
          type: "info",
          title: `Batch ${index + 1}`,
          message,
          duration: 4000,
        });
      }, index * 500);
    });
  };

  const showSmartDuration = () => {
    const message =
      "This is a longer message that will automatically get a longer duration because it takes more time to read and process the information provided.";
    const wordCount = message.split(" ").length;
    const smartDuration = Math.max(3000, wordCount * 200); // 200ms per word, minimum 3s

    addToast({
      type: "info",
      title: "Smart Duration",
      message,
      duration: smartDuration,
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <b>Enhanced Toast Notification Queue</b>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A production-ready, accessible, and feature-rich toast notification
            Queue with advanced animations, smart duration calculation, batch
            operations, and comprehensive accessibility support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Toast Type Buttons */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Toast Types
              </h2>

              {/* Basic Types */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Basic Types
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={showSuccessToast}
                    className="bg-toast-success hover:bg-toast-success/90 text-toast-success-foreground"
                  >
                    Success Toast
                  </Button>
                  <Button
                    onClick={showErrorToast}
                    className="bg-toast-error hover:bg-toast-error/90 text-toast-error-foreground"
                  >
                    Error Toast
                  </Button>
                  <Button
                    onClick={showInfoToast}
                    className="bg-toast-info hover:bg-toast-info/90 text-toast-info-foreground"
                  >
                    Info Toast
                  </Button>
                  <Button
                    onClick={showWarningToast}
                    className="bg-toast-warning hover:bg-toast-warning/90 text-toast-warning-foreground"
                  >
                    Warning Toast
                  </Button>
                </div>
              </div>

              {/* Advanced Features */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Advanced Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={showActionToast}
                    className="bg-toast-action hover:bg-toast-action/90 text-toast-action-foreground"
                  >
                    Action with Undo
                  </Button>
                  <Button
                    onClick={showPromiseDemo}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={promiseStatus === "pending"}
                  >
                    {promiseStatus === "pending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Loading...
                      </>
                    ) : (
                      "Promise Demo"
                    )}
                  </Button>
                  <Button
                    onClick={showLoadingToast}
                    className="bg-toast-loading hover:bg-toast-loading/90 text-toast-loading-foreground"
                  >
                    Loading Toast
                  </Button>
                  <Button
                    onClick={showPersistentToast}
                    className="bg-toast-persistent hover:bg-toast-persistent/90 text-toast-persistent-foreground"
                  >
                    Persistent Toast
                  </Button>
                </div>
              </div>

              {/* Smart Features */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Smart Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={showBatchToasts}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Batch Toasts
                  </Button>
                  <Button
                    onClick={showSmartDuration}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Smart Duration
                  </Button>
                  <Button
                    onClick={clearAllToasts}
                    variant="outline"
                    className="col-span-2"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configuration
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Position
                  </label>
                  <Select
                    value={config.position}
                    onValueChange={(value) => updateConfig({ position: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top-right">Top right</SelectItem>
                      <SelectItem value="top-left">Top left</SelectItem>
                      <SelectItem value="bottom-right">Bottom right</SelectItem>
                      <SelectItem value="bottom-left">Bottom left</SelectItem>
                      <SelectItem value="top-center">Top center</SelectItem>
                      <SelectItem value="bottom-center">
                        Bottom center
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Max Toasts: {config.maxToasts}
                  </label>
                  <Slider
                    value={[config.maxToasts]}
                    onValueChange={([value]) =>
                      updateConfig({ maxToasts: value })
                    }
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Duration: {config.defaultDuration / 1000}s
                  </label>
                  <Slider
                    value={[config.defaultDuration]}
                    onValueChange={([value]) =>
                      updateConfig({ defaultDuration: value })
                    }
                    min={1000}
                    max={15000}
                    step={1000}
                    className="w-full"
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MousePointer className="h-4 w-4" />
                      Pause on Hover
                    </label>
                    <Switch
                      checked={config.pauseOnHover}
                      onCheckedChange={(checked) =>
                        updateConfig({ pauseOnHover: checked })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Show Progress Bar
                    </label>
                    <Switch
                      checked={config.showProgress}
                      onCheckedChange={(checked) =>
                        updateConfig({ showProgress: checked })
                      }
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Theme & Accessibility */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Accessibility</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    {isDarkMode ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                    {isDarkMode ? "Switch to Light" : "Switch to Dark"}
                  </label>
                  <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium flex items-center gap-2">
                    {config.enableSounds ? (
                      <Volume2 className="h-4 w-4" />
                    ) : (
                      <VolumeX className="h-4 w-4" />
                    )}
                    {config.enableSounds ? "Disable Sounds" : "Enable Sounds"}
                  </label>
                  <Switch
                    checked={config.enableSounds}
                    onCheckedChange={(checked) =>
                      updateConfig({ enableSounds: checked })
                    }
                  />
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Press Esc to dismiss
                </div>
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  Press Enter for actions
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Screen reader compatible
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Respects reduced motion
                </div>
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  Keyboard navigation
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <Card className="mt-6 p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Enhanced Features(TOAST Notification)
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Sparkles className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="font-medium mb-1">Smooth Animations</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful staggered animations with spring physics
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Eye className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="font-medium mb-1">Fully Accessible</h3>
              <p className="text-sm text-muted-foreground">
                ARIA roles, keyboard navigation, and screen reader support
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="font-medium mb-1">Smart Duration</h3>
              <p className="text-sm text-muted-foreground">
                Automatically calculates optimal display time based on content
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Volume2 className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-medium mb-1">Sound Effects</h3>
              <p className="text-sm text-muted-foreground">
                Optional audio feedback for different toast types
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Smartphone className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="font-medium mb-1">Responsive Design</h3>
              <p className="text-sm text-muted-foreground">
                Optimized for all screen sizes and mobile devices
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Zap className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-medium mb-1">Batch Operations</h3>
              <p className="text-sm text-muted-foreground">
                Display multiple related toasts in sequence
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Palette className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="font-medium mb-1">Theme Support</h3>
              <p className="text-sm text-muted-foreground">
                Light and dark themes with seamless transitions
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Gift className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-medium mb-1">Promise Integration</h3>
              <p className="text-sm text-muted-foreground">
                Seamless async operation feedback with promises
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;