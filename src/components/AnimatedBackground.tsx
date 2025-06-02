
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = 0;
    let height = 0;
    let particlesArray: Particle[] = [];
    let starsArray: Star[] = [];
    const particleCount = isMobile ? 40 : 120;
    const starCount = isMobile ? 30 : 80;
    let animationFrameId: number;
    let time = 0;
    
    // Mouse position for divine interaction
    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: isMobile ? 80 : 200
    };
    
    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
      initStars();
    }
    
    // Divine particle class with holy glow
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;
      glowIntensity: number;
      pulseSpeed: number;
      
      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 3 + 1;
        this.density = Math.random() * 25 + 3;
        this.glowIntensity = Math.random() * 0.8 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        
        // Divine color palette with ethereal glow
        const colors = [
          'rgba(155, 135, 245, 0.9)',  // Divine purple
          'rgba(30, 174, 219, 0.8)',   // Celestial blue  
          'rgba(249, 115, 22, 0.7)',   // Sacred orange
          'rgba(255, 255, 255, 0.6)',  // Pure light
          'rgba(255, 215, 0, 0.5)',    // Golden radiance
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      draw() {
        if (!ctx) return;
        
        const glow = Math.sin(time * this.pulseSpeed) * this.glowIntensity + this.glowIntensity;
        
        // Create divine radial gradient
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color.replace(/[\d\.]+\)$/g, `${glow * 0.3})`));
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * glow, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        if (mouse.x === null || mouse.y === null) return;
        
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density * 0.5;
          const directionY = forceDirectionY * force * this.density * 0.5;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 15;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 15;
          }
        }
      }
    }
    
    // Divine stars with twinkling effect
    class Star {
      x: number;
      y: number;
      size: number;
      twinkleSpeed: number;
      brightness: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.twinkleSpeed = Math.random() * 0.05 + 0.01;
        this.brightness = Math.random();
      }
      
      draw() {
        if (!ctx) return;
        
        const twinkle = Math.sin(time * this.twinkleSpeed + this.x + this.y) * 0.5 + 0.5;
        const alpha = this.brightness * twinkle;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.fill();
        
        // Cross sparkle effect
        if (alpha > 0.7) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x - this.size * 2, this.y);
          ctx.lineTo(this.x + this.size * 2, this.y);
          ctx.moveTo(this.x, this.y - this.size * 2);
          ctx.lineTo(this.x, this.y + this.size * 2);
          ctx.stroke();
        }
      }
      
      update() {
        // Gentle floating motion
        this.x += Math.sin(time * 0.001 + this.y * 0.01) * 0.2;
        this.y += Math.cos(time * 0.0008 + this.x * 0.01) * 0.1;
        
        // Wrap around screen
        if (this.x > width + 10) this.x = -10;
        if (this.x < -10) this.x = width + 10;
        if (this.y > height + 10) this.y = -10;
        if (this.y < -10) this.y = height + 10;
      }
    }
    
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particlesArray.push(new Particle(x, y));
      }
    }
    
    function initStars() {
      starsArray = [];
      for (let i = 0; i < starCount; i++) {
        starsArray.push(new Star());
      }
    }
    
    function connectParticles() {
      if (!ctx) return;
      
      const connectionRadius = isMobile ? 100 : 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionRadius) {
            const opacity = 1 - (distance / connectionRadius);
            const pulse = Math.sin(time * 0.003) * 0.3 + 0.7;
            
            // Divine connection lines with gradient
            const gradient = ctx.createLinearGradient(
              particlesArray[a].x, particlesArray[a].y,
              particlesArray[b].x, particlesArray[b].y
            );
            gradient.addColorStop(0, `rgba(155, 135, 245, ${opacity * 0.4 * pulse})`);
            gradient.addColorStop(0.5, `rgba(30, 174, 219, ${opacity * 0.3 * pulse})`);
            gradient.addColorStop(1, `rgba(249, 115, 22, ${opacity * 0.2 * pulse})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    function drawDivineAura() {
      if (!ctx) return;
      
      // Ethereal background pulse
      const pulseIntensity = Math.sin(time * 0.002) * 0.1 + 0.1;
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height)
      );
      gradient.addColorStop(0, `rgba(155, 135, 245, ${pulseIntensity * 0.05})`);
      gradient.addColorStop(0.5, `rgba(30, 174, 219, ${pulseIntensity * 0.03})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    function animate() {
      if (!ctx) return;
      time++;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw divine aura first
      drawDivineAura();
      
      // Update and draw stars
      for (let i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
        starsArray[i].draw();
      }
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw divine connections
      connectParticles();
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.x;
      mouse.y = e.y;
    }
    
    function handleTouchMove(e: TouchEvent) {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }
    
    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }
    
    resizeCanvas();
    
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchend', handleMouseLeave);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchend', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none" 
    />
  );
};

export default AnimatedBackground;
