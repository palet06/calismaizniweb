import Footer from "@/components/footer";
import Header from "@/components/header";

export default function WWWLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="min-h-screen bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      
  );
}