export default function MapLoading({
  text = 'Getting your location...',
}: {
  text?: string;
}) {
  return (
    <div className='relative w-full h-full bg-gray-100 overflow-hidden'>
      {/* Map skeleton with animated loading effect */}
      <div className='absolute inset-0 bg-linear-to-br from-blue-50 to-green-50'>
        {/* Grid pattern to simulate map */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='h-full w-full'
            style={{
              backgroundImage:
                'linear-gradient(0deg, #e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        {/* Loading shimmer effect */}
        <div className='absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30 animate-pulse'></div>

        {/* Simulated map elements */}
        <div className='absolute top-1/4 left-1/3 w-16 h-16 bg-blue-300 rounded-full opacity-40 animate-pulse'></div>
        <div
          className='absolute top-1/2 right-1/4 w-12 h-12 bg-green-300 rounded opacity-40 animate-pulse'
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className='absolute bottom-1/3 left-1/2 w-20 h-8 bg-gray-300 rounded opacity-40 animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Loading indicator */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex flex-col items-center space-y-4'>
            <div className='w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            <p className='text-gray-600 text-sm font-medium'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
