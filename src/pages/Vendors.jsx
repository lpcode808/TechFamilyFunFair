import { memo, useMemo } from 'react';
import { PhoneIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Card from '../components/Card';
import vendorsData from '../data/vendors.json';

const VendorCard = memo(({ vendor }) => (
  <Card className="hover:shadow-md transition-shadow">
    <div className="flex items-start">
      <span className="text-4xl mr-3">{vendor.emoji}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-la-pietra-blue text-lg mb-1">
          {vendor.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {vendor.description}
        </p>

        <div className="space-y-1 text-sm">
          {vendor.location && (
            <div className="flex items-center text-gray-500">
              <MapPinIcon className="w-4 h-4 mr-1 flex-shrink-0" />
              <span className="truncate">{vendor.location}</span>
            </div>
          )}
          {vendor.phone && (
            <div className="flex items-center text-gray-500">
              <PhoneIcon className="w-4 h-4 mr-1 flex-shrink-0" />
              <a
                href={`tel:${vendor.phone}`}
                className="hover:text-la-pietra-blue transition-colors"
              >
                {vendor.phone}
              </a>
            </div>
          )}
          {vendor.website && (
            <div className="flex items-center text-gray-500">
              <GlobeAltIcon className="w-4 h-4 mr-1 flex-shrink-0" />
              <a
                href={`https://${vendor.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-la-pietra-blue transition-colors truncate"
              >
                {vendor.website}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </Card>
));

VendorCard.displayName = 'VendorCard';

const Vendors = memo(() => {
  // Filter only merchandise vendors for this page
  const merchandiseVendors = useMemo(() =>
    vendorsData.filter(v => v.category === 'merchandise'),
    []
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="section-title">Merchandise & Shopping</h1>

      <Card withHeader className="mb-6">
        <p className="text-gray-700">
          Browse our selection of merchandise vendors offering tech gadgets, toys, books, art, and La Pietra spirit wear. Support local businesses while finding the perfect gift or souvenir!
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {merchandiseVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>

      {merchandiseVendors.length === 0 && (
        <Card>
          <p className="text-gray-500 text-center py-8">
            No merchandise vendors available at this time.
          </p>
        </Card>
      )}

      {/* Info Card */}
      <Card withHeader className="mt-6">
        <h3 className="font-semibold text-la-pietra-blue mb-2">
          Payment Information
        </h3>
        <p className="text-gray-700 text-sm">
          Most vendors accept cash and major credit cards. Please check with individual vendors for specific payment options and current pricing.
        </p>
      </Card>
    </div>
  );
});

Vendors.displayName = 'Vendors';

export default Vendors;
