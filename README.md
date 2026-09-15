These are the APIS 

[
base URL: https://admin.evsystems.com.au/api

endpoint:/register
Method:POST

JSON data
{
    "name": "Test User",
    "email": "testuser@examples.com",
    "password": "password123",
    "password_confirmation": "password123"
}
response:- 
{
    "success": true,
    "message": "Registration successful",
    "data": {
        "id": 9,
        "name": "Test User",
        "username": "",
        "email": "testuser@examples.com",
        "phone": "",
        "avatar": "https://admin.evsystems.com.au/user.jpg",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkbWluLmV2c3lzdGVtcy5jb20uYXUvYXBpL3JlZ2lzdGVyIiwiaWF0IjoxNzg5MzIwNjYyLCJleHAiOjE3ODkzMjQyNjIsIm5iZiI6MTc4OTMyMDY2MiwianRpIjoiYzg0NWVBUW9Vd211SHphRCIsInN1YiI6IjkiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.JWXAFkCR8YekCwNl9DkrlqFk-Ns9Ao0RPGMKrERCjBY",
        "role": null
    },
    "code": 201
}



endpoint:/login
Method:POST

JSON data
{
    "email": "testuser@example.com",
    "password": "password123"
}

response:- 
{
    "success": true,
    "message": "Login successful",
    "data": {
        "id": 8,
        "name": "Test User",
        "username": "",
        "email": "testuser@example.com",
        "phone": "",
        "avatar": "https://admin.evsystems.com.au/user.jpg",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FkbWluLmV2c3lzdGVtcy5jb20uYXUvYXBpL2xvZ2luIiwiaWF0IjoxNzg5MzIwMTY2LCJleHAiOjE3ODkzMjM3NjYsIm5iZiI6MTc4OTMyMDE2NiwianRpIjoiV0RYNG1kUlFKVnpOanRveiIsInN1YiI6IjgiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.k9qhy8q9sNDlUVmnar-3PjDYrLChdY4RGa54tU09caI",
        "role": "user"
    },
    "code": 200
}




endpoint:/logout
Method:POST

JSON data

response:- 
{
    "success": true,
    "message": "Successfully logged out",
    "data": {
        "name": "John Updated"
    },
    "code": 200
}



These are the APIs for the landing page data

endpoint:/landing-page
Method:GET

JSON data

response:- 
{
    "status": "success",
    "data": {
        "banners": [
            {
                "id": 1,
                "title": "zx",
                "subtitle": "zx",
                "banner_logo": "https://admin.evsystems.com.au/uploads/landing-page/banners/1789047915_6aa2b46b73ad7.png",
                "banner_image": "https://admin.evsystems.com.au/uploads/landing-page/banners/1789047915_6aa2b46b73450.png"
            }
        ],
        "taglines": [],
        "features": [],
        "whyEvSystems": []
    }
}




endpoint:/products
Method:GET

JSON data

response:- 
{
    "status": "success",
    "message": "Product fetched successfully",
    "data": [
        {   
            "id": 8,
            "product_title": "werwer",
            "product_description": "zxczxc",
            "gallery_image": [
                {
                    "id": 9,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789149852_6aa4429c2b250.png"
                },
                {
                    "id": 10,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789149852_6aa4429c2d515.jpg"
                }
            ],
            "product_variation": []
        },
        {
            "product_title": "Ultra Fast EV Charging Cable (Type 2 to Type 2)",
            "product_description": "Premium quality heavy-duty EV charging cable supporting up to 32A single/three-phase charging. Compatible with all Type 2 electric vehicles across Europe and North America.",
            "gallery_image": [
                {
                    "id": 3,
                    "image": "https://admin.evsystems.com.au/uploads/products/ev_cable_1.jpg"
                },
                {
                    "id": 4,
                    "image": "https://admin.evsystems.com.au/uploads/products/ev_cable_2.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 2,
                    "price": "199.99",
                    "length": "15.00",
                    "technical_specification": [
                        {
                            "id": 2,
                            "specification_name": "Charging Current",
                            "specification_value": "32 Amps Max"
                        },
                        {
                            "id": 3,
                            "specification_name": "Voltage Rating",
                            "specification_value": "240V AC"
                        },
                        {
                            "id": 4,
                            "specification_name": "IP Protection Rating",
                            "specification_value": "IP65 Weatherproof"
                        },
                        {
                            "id": 5,
                            "specification_name": "Operating Temperature",
                            "specification_value": "-30°C to +50°C"
                        }
                    ]
                },
                {
                    "id": 3,
                    "price": "249.99",
                    "length": "25.00",
                    "technical_specification": [
                        {
                            "id": 6,
                            "specification_name": "Charging Current",
                            "specification_value": "32 Amps Max"
                        },
                        {
                            "id": 7,
                            "specification_name": "Voltage Rating",
                            "specification_value": "240V AC"
                        },
                        {
                            "id": 8,
                            "specification_name": "IP Protection Rating",
                            "specification_value": "IP65 Weatherproof"
                        },
                        {
                            "id": 9,
                            "specification_name": "Operating Temperature",
                            "specification_value": "-30°C to +50°C"
                        }
                    ]
                },
                {
                    "id": 4,
                    "price": "329.99",
                    "length": "50.00",
                    "technical_specification": [
                        {
                            "id": 10,
                            "specification_name": "Charging Current",
                            "specification_value": "32 Amps Max"
                        },
                        {
                            "id": 11,
                            "specification_name": "Voltage Rating",
                            "specification_value": "240V AC"
                        },
                        {
                            "id": 12,
                            "specification_name": "IP Protection Rating",
                            "specification_value": "IP65 Weatherproof"
                        },
                        {
                            "id": 13,
                            "specification_name": "Operating Temperature",
                            "specification_value": "-30°C to +50°C"
                        }
                    ]
                }
            ]
        },
        {
            "product_title": "Smart Home Level 2 EV Charger Station (40A Wallbox)",
            "product_description": "Fast residential Level 2 EV charging station with Wi-Fi app control, scheduled charging, and smart energy monitoring.",
            "gallery_image": [
                {
                    "id": 5,
                    "image": "https://admin.evsystems.com.au/uploads/products/ev_charger_1.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 5,
                    "price": "499.00",
                    "length": "20.00",
                    "technical_specification": [
                        {
                            "id": 14,
                            "specification_name": "Power Output",
                            "specification_value": "9.6 kW / 40A"
                        },
                        {
                            "id": 15,
                            "specification_name": "Connectivity",
                            "specification_value": "Wi-Fi 2.4GHz + Bluetooth"
                        },
                        {
                            "id": 16,
                            "specification_name": "Connector Standard",
                            "specification_value": "SAE J1772"
                        }
                    ]
                },
                {
                    "id": 6,
                    "price": "549.00",
                    "length": "30.00",
                    "technical_specification": [
                        {
                            "id": 17,
                            "specification_name": "Power Output",
                            "specification_value": "9.6 kW / 40A"
                        },
                        {
                            "id": 18,
                            "specification_name": "Connectivity",
                            "specification_value": "Wi-Fi 2.4GHz + Bluetooth"
                        },
                        {
                            "id": 19,
                            "specification_name": "Connector Standard",
                            "specification_value": "SAE J1772"
                        }
                    ]
                }
            ]
        },
        {
            "product_title": "Portable EV Fast Charger Cable (NEMA 14-50 Plug)",
            "product_description": "Compact and portable EV charger for travel. Plug into any standard NEMA 14-50 outlet for up to 6x faster charging.",
            "gallery_image": [
                {
                    "id": 6,
                    "image": "https://admin.evsystems.com.au/uploads/products/portable_charger_1.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 7,
                    "price": "299.00",
                    "length": "16.00",
                    "technical_specification": [
                        {
                            "id": 20,
                            "specification_name": "Input Plug",
                            "specification_value": "NEMA 14-50 Heavy Duty"
                        },
                        {
                            "id": 21,
                            "specification_name": "Max Amperage",
                            "specification_value": "32A Adjustable"
                        },
                        {
                            "id": 22,
                            "specification_name": "Safety Features",
                            "specification_value": "Overvoltage, Leakage & Thermal Protection"
                        }
                    ]
                },
                {
                    "id": 8,
                    "price": "349.00",
                    "length": "24.00",
                    "technical_specification": [
                        {
                            "id": 23,
                            "specification_name": "Input Plug",
                            "specification_value": "NEMA 14-50 Heavy Duty"
                        },
                        {
                            "id": 24,
                            "specification_name": "Max Amperage",
                            "specification_value": "32A Adjustable"
                        },
                        {
                            "id": 25,
                            "specification_name": "Safety Features",
                            "specification_value": "Overvoltage, Leakage & Thermal Protection"
                        }
                    ]
                }
            ]
        },
        {
            "product_title": "Heavy Duty Commercial EV Charging Extension Cord",
            "product_description": "Industrial grade extension cable designed specifically for electric vehicle high-power charging demands.",
            "gallery_image": [
                {
                    "id": 7,
                    "image": "https://admin.evsystems.com.au/uploads/products/extension_cord_1.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 9,
                    "price": "120.00",
                    "length": "10.00",
                    "technical_specification": [
                        {
                            "id": 26,
                            "specification_name": "Wire Gauge",
                            "specification_value": "10 AWG Pure Copper Wire"
                        },
                        {
                            "id": 27,
                            "specification_name": "Outer Jacket",
                            "specification_value": "Flame Retardant Rubber"
                        }
                    ]
                },
                {
                    "id": 10,
                    "price": "180.00",
                    "length": "20.00",
                    "technical_specification": [
                        {
                            "id": 28,
                            "specification_name": "Wire Gauge",
                            "specification_value": "10 AWG Pure Copper Wire"
                        },
                        {
                            "id": 29,
                            "specification_name": "Outer Jacket",
                            "specification_value": "Flame Retardant Rubber"
                        }
                    ]
                },
                {
                    "id": 11,
                    "price": "230.00",
                    "length": "30.00",
                    "technical_specification": [
                        {
                            "id": 30,
                            "specification_name": "Wire Gauge",
                            "specification_value": "10 AWG Pure Copper Wire"
                        },
                        {
                            "id": 31,
                            "specification_name": "Outer Jacket",
                            "specification_value": "Flame Retardant Rubber"
                        }
                    ]
                }
            ]
        },
        {
            "product_title": "Universal Tesla to J1772 EV Adapter Cable",
            "product_description": "Allows non-Tesla electric vehicles to charge at Tesla High Power Wall Connectors, Destination Chargers and Mobile Connectors.",
            "gallery_image": [
                {
                    "id": 8,
                    "image": "https://admin.evsystems.com.au/uploads/products/adapter_1.jpg"
                }
            ],
            "product_variation": [
                {
                    "id": 12,
                    "price": "89.99",
                    "length": "1.50",
                    "technical_specification": [
                        {
                            "id": 32,
                            "specification_name": "Adapter Compatibility",
                            "specification_value": "Tesla Wall Connector to J1772"
                        },
                        {
                            "id": 33,
                            "specification_name": "Maximum Rating",
                            "specification_value": "48 Amps / 250V"
                        }
                    ]
                }
            ]
        },
        {
            "product_title": "test",
            "product_description": "sdfsdfmsd",
            "gallery_image": [
                {
                    "id": 1,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789052564_6aa2c694ea5cf.jpg"
                },
                {
                    "id": 2,
                    "image": "https://admin.evsystems.com.au/uploads/products/1789052564_6aa2c694ebbb4.png"
                }
            ],
            "product_variation": [
                {
                    "id": 1,
                    "price": "50.00",
                    "length": "50.00",
                    "technical_specification": [
                        {
                            "id": 1,
                            "specification_name": "s",
                            "specification_value": "sa"
                        }
                    ]
                }
            ]
        }
    ]
}




endpoint:/products/1
Method:GET

JSON data

response:- 
{
    "status": "success",
    "message": "Product fetched successfully",
    "data": {
        "product_title": "test",
        "product_description": "sdfsdfmsd",
        "gallery_image": [
            {
                "id": 1,
                "image": "https://admin.evsystems.com.au/uploads/products/1789052564_6aa2c694ea5cf.jpg"
            },
            {
                "id": 2,
                "image": "https://admin.evsystems.com.au/uploads/products/1789052564_6aa2c694ebbb4.png"
            }
        ],
        "product_variation": [
            {
                "id": 1,
                "price": "50.00",
                "length": "50.00",
                "technical_specification": [
                    {
                        "id": 1,
                        "specification_name": "s",
                        "specification_value": "sa"
                    }
                ]
            }
        ]
    }
}




endpoint:/pages/contact-us-message
Method:POST

JSON data
{
    "name": "John",
    "surname": "Doe",
    "email": "john@example.com",
    "nation": "Bangladesh",
    "activity": "Business",
    "telephone": "+8801700000000",
    "message": "Hello, I am interested in your products."
}
response:- 
{
    "success": true,
    "message": "Contact message submitted successfully.",
    "data": {
        "name": "John",
        "surname": "Doe",
        "email": "john@example.com",
        "nation": "Bangladesh",
        "activity": "Business",
        "telephone": "+8801700000000",
        "message": "Hello, I am interested in your products.",
        "status": "pending",
        "updated_at": "2026-09-13T17:26:41.000000Z",
        "created_at": "2026-09-13T17:26:41.000000Z",
        "id": 1
    },
    "code": 201
}




endpoint:/paypal/payment
Method:POST

JSON data
{
    "product_id": 1,
    "product_variation_id": 1,
    "quantity": 1,
    "sub_total": 100.00,
    "tax": 0.00,
    "discount": 0.00,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "country_region": "Bangladesh",
    "address_line_one": "Dhaka, Bangladesh",
    "sub_burb": "Gulshan",
    "state": "Dhaka",
    "post_code": "1212",
    "notes": "Handle with care"
}
response:- 
{
    "status": "success",
    "paypal_url": "https://www.sandbox.paypal.com/checkoutnow?token=6VR3817432832553Y"
}




endpoint:/profile-info
Method:GET

JSON data

response:- 
{
    "success": true,
    "message": "Profile fetched successfully.",
    "data": {
        "name": "Test User",
        "email": "testuser@example.com",
        "phone": null,
        "username": null,
        "avatar": "https://admin.evsystems.com.au/user.jpg",
        "role": "user",
        "address": null,
        "city": null,
        "zip": null
    },
    "code": 200
}




endpoint:/profile-update
Method:POST

JSON data
name
phone
response:- 
{
    "success": true,
    "message": "Profile updated successfully.",
    "data": {
        "name": "John Updated",
        "email": "testuser@example.com",
        "phone": "+8801711111111",
        "username": null,
        "avatar": "https://admin.evsystems.com.au/user.jpg",
        "role": "user"
    },
    "code": 200
}




endpoint:/profile-change-password
Method:POST

JSON data
{
    "old_password": "password123",
    "new_password": "newpassword123",
    "new_password_confirmation": "newpassword123"
}
response:- 

{
    "success": true,
    "message": "Password updated successfully",
    "data": [],
    "code": 200
}



endpoint:/profile-change-address
Method:POST

JSON data
{
    "address": "123 Street Name, City",
    "city":"Dahak",
    "zip": "11884"
}
response:- 
{
    "success": true,
    "message": "Address updated successfully.",
    "data": {
        "address": "123 Street Name, City",
        "city": "Dahak",
        "zip": "11884"
    },
    "code": 200
}




endpoint:/profile-update-location
Method:POST

JSON data
{
    "latitude": "23.8103",
    "longitude": "90.4125"
}
response:- 
{
    "message": "The user latitude field is required. (and 1 more error)",
    "errors": {
        "user_latitude": [
            "The user latitude field is required."
        ],
        "user_longitude": [
            "The user longitude field is required."
        ]
    }
}




endpoint:/language-toggle
Method:POST

JSON data
{
    "lang": "en"
}
response:- 
{
    "success": true,
    "message": "Language switched successfully",
    "data": {
        "language": "en"
    },
    "code": 200
}

{
    "success": true,
    "message": "Language switched successfully",
    "data": {
        "language": "it"
    },
    "code": 200
}


endpoint:
Method:

JSON data

response:- 







]