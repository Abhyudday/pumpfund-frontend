import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          border: '2px solid black',
          borderRadius: '6px', // slightly rounded square
          position: 'relative',
        }}
      >
        {/* Simplified Rising Chart / 'P' mashup */}
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            left: '4px',
            width: '16px',
            height: '16px',
            background: 'black',
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 100%)', // Triangle/Chart
          }}
        />
        <div
            style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                width: '8px',
                height: '8px',
                background: '#22c55e', // Green dot for "active/profit"
                borderRadius: '50%',
                border: '1px solid black',
            }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
