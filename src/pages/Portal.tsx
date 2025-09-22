import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload,
  FileText,
  Download,
  MessageCircle,
  Shield,
  CheckCircle,
  Clock,
  User,
  CreditCard,
  Calendar,
  Eye,
  Lock,
  AlertCircle,
  X,
  FileImage
} from "lucide-react";

// Mock user data for demonstration
const mockUser = {
  name: "John Smith",
  email: "john.smith@email.com",
  clientId: "TX-2025-001", 
  joinDate: "January 2024",
};

const mockDocuments = [
  { id: 1, name: "W2_2024_Form.pdf", type: "Tax Document", uploadDate: "2025-01-15", status: "Processed" },
  { id: 2, name: "1099_Investment_Income.pdf", type: "Tax Document", uploadDate: "2025-01-20", status: "Processing" },
  { id: 3, name: "Tax_Return_2024.pdf", type: "Completed Return", uploadDate: "2025-02-01", status: "Ready" },
];

const mockMessages = [
  { id: 1, from: "Sarah Johnson, CPA", message: "Your 2024 tax return has been completed and is ready for review.", date: "2025-02-01", read: false },
  { id: 2, from: "TaxPro Services", message: "We've received your W-2 document. Processing will begin shortly.", date: "2025-01-15", read: true },
  { id: 3, from: "Sarah Johnson, CPA", message: "Please upload your 1099 forms when available.", date: "2025-01-10", read: true },
];

const mockInvoices = [
  { id: 1, service: "Individual Tax Return 2024", amount: "$250.00", date: "2025-02-01", status: "Paid" },
  { id: 2, service: "Document Processing Fee", amount: "$25.00", date: "2025-01-15", status: "Paid" },
];

// Document categories as specified in PRD
const documentCategories = [
  "W-2 Forms",
  "1099 Forms", 
  "Bank Statements",
  "Receipts & Deductions",
  "Other Documents"
];

// File validation constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];

// Document status types
type DocumentStatus = "Uploading" | "Upload Successful" | "Processing..." | "Ready for Review" | "Error";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  category: string;
  status: DocumentStatus;
  progress: number;
  uploadDate: string;
}

export default function Portal() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  
  // Document upload state
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoggedIn(true);
    setIsLoading(false);
    
    toast({
      title: "Welcome back!",
      description: "Successfully logged into your client portal.",
    });
  };

  // File validation function
  const validateFile = (file: File): string | null => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      return "Only PDF, JPG, and PNG files are allowed";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 5MB";
    }
    return null;
  };

  // File upload handler
  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    if (!selectedCategory) {
      toast({
        title: "Category Required",
        description: "Please select a document category before uploading.",
        variant: "destructive",
      });
      return;
    }

    Array.from(files).forEach(async (file) => {
      const validationError = validateFile(file);
      if (validationError) {
        toast({
          title: "Upload Failed",
          description: validationError,
          variant: "destructive",
        });
        return;
      }

      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      const newFile: UploadedFile = {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type,
        category: selectedCategory,
        status: "Uploading",
        progress: 0,
        uploadDate: new Date().toISOString().split('T')[0],
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setUploadedFiles(prev => 
          prev.map(f => f.id === fileId ? { ...f, progress } : f)
        );
      }

      // Simulate upload completion
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === fileId 
            ? { ...f, status: "Upload Successful", progress: 100 }
            : f
        )
      );

      // After 2 seconds, change to "Processing..." status
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, status: "Processing..." }
              : f
          )
        );
      }, 2000);

      // After 5 seconds, change to "Ready for Review" status
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, status: "Ready for Review" }
              : f
          )
        );
      }, 5000);

      toast({
        title: "Upload Successful",
        description: `${file.name} has been uploaded successfully.`,
      });
    });
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  // File input change handler
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
  };

  // Remove uploaded file
  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  // Get file icon based on type
  const getFileIcon = (type: string) => {
    if (type === 'application/pdf') return <FileText className="h-5 w-5 text-red-500" />;
    if (type.startsWith('image/')) return <FileImage className="h-5 w-5 text-blue-500" />;
    return <FileText className="h-5 w-5 text-muted-foreground" />;
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Get status badge variant
  const getStatusBadgeVariant = (status: DocumentStatus) => {
    switch (status) {
      case "Upload Successful":
        return "default";
      case "Processing...":
        return "secondary";
      case "Ready for Review":
        return "default";
      case "Error":
        return "destructive";
      default:
        return "outline";
    }
  };

  const handleDownload = (fileName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${fileName}...`,
    });
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
        <div className="w-full max-w-md space-y-8 p-8">
          <div className="text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Client Portal</h1>
            <p className="text-muted-foreground">
              Secure access to your tax documents and account information
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your secure portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
              
              <Separator className="my-4" />
              
              <div className="space-y-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?
                </p>
                <Button variant="outline" className="w-full">
                  Request Portal Access
                </Button>
                <Button variant="link" className="text-sm">
                  Forgot Password?
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Bank-level encryption protects your information</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-background border-b">
        <div className="container-max">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Client Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {mockUser.name}</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container-max py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Quick Stats */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-xs text-muted-foreground">New Message</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">90%</p>
                  <p className="text-xs text-muted-foreground">Complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">$0</p>
                  <p className="text-xs text-muted-foreground">Balance Due</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Project Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>2024 Tax Return</span>
                      <span>90% Complete</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Document Collection</span>
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Tax Preparation</span>
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Review & Filing</span>
                      <Clock className="h-4 w-4 text-warning" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Tax return completed</p>
                        <p className="text-xs text-muted-foreground">February 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Upload className="h-3 w-3 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Document uploaded</p>
                        <p className="text-xs text-muted-foreground">January 20, 2025</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-warning/10">
                        <MessageCircle className="h-3 w-3 text-warning" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New message received</p>
                        <p className="text-xs text-muted-foreground">January 15, 2025</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Button onClick={handleFileUpload} className="h-20 flex-col">
                    <Upload className="h-6 w-6 mb-2" />
                    Upload Documents
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" asChild>
                    <Link to="/appointment">
                      <Calendar className="h-6 w-6 mb-2" />
                      Schedule Meeting
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Management</CardTitle>
                <CardDescription>
                  Upload, view, and manage your tax documents securely
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Document Category Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="document-category">Document Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select document category" />
                      </SelectTrigger>
                      <SelectContent>
                        {documentCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* File Upload Area */}
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragOver 
                        ? "border-primary bg-primary/5" 
                        : "border-muted-foreground/25 hover:border-primary/50"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Upload Documents</h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop files here, or click to select files
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Supported formats: PDF, JPG, PNG</p>
                      <p>Maximum file size: 5MB per file</p>
                    </div>
                    <Input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileInputChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button 
                      onClick={() => document.getElementById('file-upload')?.click()}
                      className="mt-4"
                      disabled={!selectedCategory}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choose Files
                    </Button>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium">Recently Uploaded Files</h4>
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            {getFileIcon(file.type)}
                            <div>
                              <p className="font-medium text-sm">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {file.category} • {formatFileSize(file.size)} • {file.uploadDate}
                              </p>
                              {file.status === "Uploading" && (
                                <Progress value={file.progress} className="w-32 h-1 mt-1" />
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={getStatusBadgeVariant(file.status)}>
                              {file.status}
                            </Badge>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => removeFile(file.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Existing Documents */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Previous Documents</h4>
                    {mockDocuments.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium text-sm">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">{doc.type} • {doc.uploadDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={doc.status === "Ready" ? "default" : doc.status === "Processing" ? "secondary" : "outline"}
                          >
                            {doc.status}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDownload(doc.name)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Secure communication with your tax professional
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <div key={message.id} className={`p-4 border rounded-lg ${!message.read ? 'bg-primary/5' : ''}`}>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium text-sm">{message.from}</p>
                            {!message.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                          </div>
                          <p className="text-sm text-muted-foreground">{message.message}</p>
                          <p className="text-xs text-muted-foreground">{message.date}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Invoices</CardTitle>
                <CardDescription>
                  View your service history and payment status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInvoices.map((invoice) => (
                    <div key={invoice.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{invoice.service}</p>
                        <p className="text-xs text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{invoice.amount}</p>
                        <Badge className="text-xs">
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Manage your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name</Label>
                      <Input value={mockUser.name} readOnly />
                    </div>
                    <div>
                      <Label>Email Address</Label>
                      <Input value={mockUser.email} readOnly />
                    </div>
                    <div>
                      <Label>Client ID</Label>
                      <Input value={mockUser.clientId} readOnly />
                    </div>
                    <div>
                      <Label>Member Since</Label>
                      <Input value={mockUser.joinDate} readOnly />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Account Actions</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Lock className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <User className="mr-2 h-4 w-4" />
                        Update Profile
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        Privacy Settings
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}