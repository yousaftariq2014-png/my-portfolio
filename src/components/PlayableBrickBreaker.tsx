import React, { useEffect, useRef, useState } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';

export const PlayableBrickBreaker: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover' | 'won'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(240);

  // References for mutable game loop state to avoid closure traps
  const gameRef = useRef({
    paddleX: 130,
    paddleWidth: 60,
    paddleHeight: 8,
    ballX: 160,
    ballY: 180,
    ballSpeedX: 2.5,
    ballSpeedY: -2.5,
    ballRadius: 4,
    lives: 3,
    score: 0,
    bricks: [] as { x: number; y: number; w: number; h: number; color: string; alive: boolean }[],
    particles: [] as { x: number; y: number; vx: number; vy: number; color: string; life: number }[]
  });

  const initBricks = () => {
    const rows = 4;
    const cols = 6;
    const brickW = 44;
    const brickH = 12;
    const pad = 6;
    const offsetTop = 24;
    const offsetLeft = 14;
    const colors = ['#f43f5e', '#fb923c', '#38bdf8', '#a855f7'];

    const bricks = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        bricks.push({
          x: offsetLeft + c * (brickW + pad),
          y: offsetTop + r * (brickH + pad),
          w: brickW,
          h: brickH,
          color: colors[r % colors.length],
          alive: true
        });
      }
    }
    return bricks;
  };

  const startGame = () => {
    const g = gameRef.current;
    g.bricks = initBricks();
    g.score = 0;
    g.lives = 3;
    g.ballX = 160;
    g.ballY = 170;
    g.ballSpeedX = 2.5 * (Math.random() > 0.5 ? 1 : -1);
    g.ballSpeedY = -2.5;
    g.paddleX = 130;
    g.particles = [];
    setScore(0);
    setGameState('playing');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const g = gameRef.current;
      g.paddleX = Math.max(0, Math.min(canvas.width - g.paddleWidth, mouseX - g.paddleWidth / 2));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        const g = gameRef.current;
        g.paddleX = Math.max(0, Math.min(canvas.width - g.paddleWidth, touchX - g.paddleWidth / 2));
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });

    const loop = () => {
      const g = gameRef.current;
      ctx.fillStyle = '#0f131a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw bricks
      let allCleared = true;
      g.bricks.forEach((b) => {
        if (b.alive) {
          allCleared = false;
          ctx.fillStyle = b.color;
          ctx.shadowColor = b.color;
          ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.roundRect(b.x, b.y, b.w, b.h, 3);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw Paddle
      ctx.fillStyle = '#38bdf8';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.roundRect(g.paddleX, canvas.height - 18, g.paddleWidth, g.paddleHeight, 4);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw particles
      for (let i = g.particles.length - 1; i >= 0; i--) {
        const p = g.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.04;
        if (p.life <= 0) {
          g.particles.splice(i, 1);
        } else {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.fillRect(p.x, p.y, 2.5, 2.5);
          ctx.globalAlpha = 1;
        }
      }

      if (gameState === 'playing') {
        // Ball movement
        g.ballX += g.ballSpeedX;
        g.ballY += g.ballSpeedY;

        // Wall collisions
        if (g.ballX - g.ballRadius <= 0) {
          g.ballX = g.ballRadius;
          g.ballSpeedX = Math.abs(g.ballSpeedX);
        } else if (g.ballX + g.ballRadius >= canvas.width) {
          g.ballX = canvas.width - g.ballRadius;
          g.ballSpeedX = -Math.abs(g.ballSpeedX);
        }

        if (g.ballY - g.ballRadius <= 0) {
          g.ballY = g.ballRadius;
          g.ballSpeedY = Math.abs(g.ballSpeedY);
        }

        // Paddle collision
        const paddleY = canvas.height - 18;
        if (
          g.ballY + g.ballRadius >= paddleY &&
          g.ballY - g.ballRadius <= paddleY + g.paddleHeight &&
          g.ballX >= g.paddleX &&
          g.ballX <= g.paddleX + g.paddleWidth
        ) {
          g.ballSpeedY = -Math.abs(g.ballSpeedY);
          // Angle modifier based on where it hit paddle
          const hitPoint = (g.ballX - (g.paddleX + g.paddleWidth / 2)) / (g.paddleWidth / 2);
          g.ballSpeedX = hitPoint * 3.5;
        }

        // Brick collisions
        g.bricks.forEach((b) => {
          if (!b.alive) return;
          if (
            g.ballX + g.ballRadius >= b.x &&
            g.ballX - g.ballRadius <= b.x + b.w &&
            g.ballY + g.ballRadius >= b.y &&
            g.ballY - g.ballRadius <= b.y + b.h
          ) {
            b.alive = false;
            g.ballSpeedY = -g.ballSpeedY;
            g.score += 10;
            setScore(g.score);

            // Spawn sparks
            for (let k = 0; k < 6; k++) {
              g.particles.push({
                x: g.ballX,
                y: g.ballY,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: b.color,
                life: 1
              });
            }
          }
        });

        // Bottom pit check
        if (g.ballY - g.ballRadius > canvas.height) {
          g.lives -= 1;
          if (g.lives <= 0) {
            setGameState('gameover');
            setHighScore((prev) => Math.max(prev, g.score));
          } else {
            g.ballX = 160;
            g.ballY = 170;
            g.ballSpeedY = -2.5;
            g.ballSpeedX = 2.5 * (Math.random() > 0.5 ? 1 : -1);
          }
        }

        if (allCleared) {
          setGameState('won');
          setHighScore((prev) => Math.max(prev, g.score + 100));
        }

        // Draw Ball
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(g.ballX, g.ballY, g.ballRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(loop);
    };

    // Initialize initial bricks on first render
    if (gameRef.current.bricks.length === 0) {
      gameRef.current.bricks = initBricks();
    }

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gameState]);

  return (
    <div className="flex flex-col items-center bg-[#13161f] border border-white/10 rounded-2xl p-4 shadow-xl text-white">
      <div className="flex items-center justify-between w-full mb-3 px-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">SCORE:</span>
          <span className="font-mono font-bold text-amber-400">{score}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>BEST {highScore}</span>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0f131a]">
        <canvas
          ref={canvasRef}
          width={320}
          height={240}
          className="cursor-ew-resize block"
        />

        {gameState === 'idle' && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
            <p className="text-xs text-slate-300 mb-3 max-w-[200px]">
              Move mouse or drag finger to control paddle
            </p>
            <button
              onClick={startGame}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transition-transform active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Play Arcade Mode
            </button>
          </div>
        )}

        {(gameState === 'gameover' || gameState === 'won') && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
            <span className="text-lg font-bold font-display text-white mb-1">
              {gameState === 'won' ? '🎉 Stage Cleared!' : 'Game Over'}
            </span>
            <span className="text-xs text-slate-400 mb-3 font-mono">
              Final Score: {score}
            </span>
            <button
              onClick={startGame}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white text-black hover:bg-slate-200 text-xs font-semibold rounded-lg transition-transform active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Play Again
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between w-full mt-3 px-1 text-[11px] text-slate-400 font-mono">
        <span>60 FPS Physics Engine</span>
        <span className="text-cyan-400">iOS Arcade Canvas</span>
      </div>
    </div>
  );
};
