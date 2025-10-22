import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based navigation on route change
    const handleHashScroll = () => {
      if (location.hash) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          setTimeout(() => {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            
            if (element) {
              // Get header height for offset
              const header = document.querySelector("header");
              const headerHeight = header?.offsetHeight || 80;
              
              // Calculate scroll position with offset
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

              // Smooth scroll with fallback for older browsers
              try {
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              } catch (error) {
                // Fallback for browsers that don't support smooth scroll
                window.scrollTo(0, offsetPosition);
              }
            }
          }, 100); // Small delay to ensure layout is complete
        });
      } else {
        // Scroll to top when no hash
        window.scrollTo(0, 0);
      }
    };

    handleHashScroll();
  }, [location]);

  // Handle orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      // Recalculate scroll position on orientation change
      if (location.hash) {
        setTimeout(() => {
          const id = location.hash.replace("#", "");
          const element = document.getElementById(id);
          
          if (element) {
            const header = document.querySelector("header");
            const headerHeight = header?.offsetHeight || 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300); // Delay to allow for layout reflow
      }
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, [location]);
};
