export const userSessionKey = 'user_info'
export const route = {
    customerDashboard: '/admin/customer',
    customerRegister: '/customer/register',
    rootOrderCustomer: '/customer/order',
    createProduct: '/customer/product/create',
    rootProduct: '/admin/product',
    createOrder: '/customer/order/create',
    rootOrder: '/admin/order',
    rootEmployee: '/customer/employee',
}
export const qrcodeTypes = [
    { name: 'QRCode marketing', type: 'qrcode-marketing' },
    { name: 'QRCode chống giả loại 1', type: 'qrcode-type1' },
    { name: 'QRCode chống giả loại 2', type: 'qrcode-type2' }
]

export const qrcodeTypesMap = {
    'qrcode-marketing':'QRCode marketing',
    'qrcode-type1':'QRCode chống giả loại 1',
    'qrcode-type2':'QRCode chống giả loại 2',
}
