const ADMIN_EMAIL = "yourname@gmail.com";
const ADMIN_PHONE = "0712345678";
const ADMIN_PIN   = "137622";
const STORAGE_KEY = "vut_clean_sellers_v6";

let openedCategoryName = null;
let openedSubCategory = "All";

const CATEGORIES = [
    {
        name: "Food & Snacks",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Hair & Beauty",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "iPhones & Laptops",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Loan Sharks",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Transport & Rides",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Tutoring & Academics",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Tech & Electronics",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Fashion & Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
    }
];

const HAIR_BEAUTY_SUBCATEGORIES = ["All", "Barbershop", "Hairdresser", "Nail Tech"];

const defaultSellers = [
    {
        id: 1,
        bizName: "Phase 2 Kota & Meals",
        ownerName: "Lerato Mokoena",
        studentNumber: "222019384",
        category: "Food & Snacks",
        subCategory: "",
        location: "Phase 2 Residence",
        phone: "072 987 6543",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• Cheese, Polony & Russian Kota: R30\n• Full House Special Kota: R45\n• Loaded Chips & Cheese: R25\n• 500ml Cold Drink: R15"
    },
    {
        id: 2,
        bizName: "Sharp Fadez Barbershop",
        ownerName: "Tshepo Sithole",
        studentNumber: "220055129",
        category: "Hair & Beauty",
        subCategory: "Barbershop",
        location: "Main Campus & Off-Campus Res",
        phone: "073 456 7890",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• Skin Fade / Taper Fade: R70\n• Chiskop / Brush Cut: R50\n• Beard Trim & Line-up: R40\n• House Call: +R20"
    },
    {
        id: 3,
        bizName: "Crown & Braids Studio",
        ownerName: "Boitumelo Nkosi",
        studentNumber: "222063190",
        category: "Hair & Beauty",
        subCategory: "Hairdresser",
        location: "Phase 2 Residence",
        phone: "076 812 3340",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• Knotless Braids (Medium): R220\n• Stitch Cornrows: R150\n• Wig Installation & Styling: R180\n• Wash & Blowout: R90"
    },
    {
        id: 4,
        bizName: "GlamTipz Nail Bar",
        ownerName: "Ayanda Zulu",
        studentNumber: "223044812",
        category: "Hair & Beauty",
        subCategory: "Nail Tech",
        location: "Killarney Residence",
        phone: "081 552 9014",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• Acrylic Overlay / Tips: R160\n• Gel Polish (Hands or Feet): R110\n• Nail Art & Gems: From R30\n• Soak-off: R50"
    },
    {
        id: 5,
        bizName: "Vaal iPhone & Laptop Plug",
        ownerName: "Sipho Mahlangu",
        studentNumber: "222098711",
        category: "iPhones & Laptops",
        subCategory: "",
        location: "Main Campus & Killarney Res",
        phone: "076 554 3321",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• iPhone 11 / 12 / 13 (Pre-owned): From R3,800\n• HP / Lenovo / Dell Laptops (i5/i7): From R3,200\n• Student Lay-bye / Cash Deals Available"
    },
    {
        id: 6,
        bizName: "Campus Quick Cash Loans",
        ownerName: "Kabelo Ndlovu",
        studentNumber: "221088412",
        category: "Loan Sharks",
        subCategory: "",
        location: "Vanderbijlpark & Main Gate",
        phone: "071 234 5678",
        vehicleInfo: "",
        gallery: [
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• Short-term loans: R200 - R2,000\n• Repayment on allowance / payday date\n• ID & VUT Student Card required"
    },
    {
        id: 7,
        bizName: "VUT-to-Vaal Mall Rides",
        ownerName: "Thabo Khumalo",
        studentNumber: "221045678",
        category: "Transport & Rides",
        subCategory: "",
        location: "Main Gate & Killarney Res",
        phone: "074 321 0987",
        vehicleInfo: "Silver Toyota Corolla Quest (4 seats)",
        gallery: [
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
        ],
        itemsSold: "• VUT to Vaal Mall: R25/trip\n• VUT to Town / Checkers: R20/trip"
    }
];

function formatWhatsAppUrl(seller) {
    const cleanPhone = seller.phone.replace(/\D+/g, "");
    const waPhone = cleanPhone.startsWith("0") ? "27" + cleanPhone.substring(1) : cleanPhone;
    const message = `Hi ${seller.ownerName}, I found ${seller.bizName} on VUT Marketplace and would like to enquire.`;
    return `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
}

function getISOWeekKey(date) {
    const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = temp.getUTCDay() || 7;
    temp.setUTCDate(temp.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((temp - yearStart) / 86400000) + 1) / 7);
    return `${temp.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

function recordAppVisit() {
    const now = new Date();
    const dayKey = now.toISOString().slice(0, 10);
    const weekKey = getISOWeekKey(now);
    const monthKey = now.toISOString().slice(0, 7);
    const yearKey = String(now.getFullYear());

    const stats = JSON.parse(localStorage.getItem("vut_visit_stats_v1") || JSON.stringify({
        day: {},
        week: {},
        month: {},
        year: {}
    }));

    stats.day[dayKey] = (stats.day[dayKey] || 0) + 1;
    stats.week[weekKey] = (stats.week[weekKey] || 0) + 1;
    stats.month[monthKey] = (stats.month[monthKey] || 0) + 1;
    stats.year[yearKey] = (stats.year[yearKey] || 0) + 1;

    localStorage.setItem("vut_visit_stats_v1", JSON.stringify(stats));
}

function getVisitSummary() {
    const now = new Date();
    const dayKey = now.toISOString().slice(0, 10);
    const weekKey = getISOWeekKey(now);
    const monthKey = now.toISOString().slice(0, 7);
    const yearKey = String(now.getFullYear());

    const stats = JSON.parse(localStorage.getItem("vut_visit_stats_v1") || JSON.stringify({
        day: {},
        week: {},
        month: {},
        year: {}
    }));

    return {
        today: stats.day[dayKey] || 0,
        thisWeek: stats.week[weekKey] || 0,
        thisMonth: stats.month[monthKey] || 0,
        thisYear: stats.year[yearKey] || 0
    };
}

function openStatsModal() {
    const pin = prompt("Enter Admin PIN to view stats:");
    if (pin === ADMIN_PIN) {
        const s = getVisitSummary();
        const maxVal = Math.max(s.today, s.thisWeek, s.thisMonth, s.thisYear, 1);

        document.getElementById("statDayCount").innerText = s.today;
        document.getElementById("statWeekCount").innerText = s.thisWeek;
        document.getElementById("statMonthCount").innerText = s.thisMonth;
        document.getElementById("statYearCount").innerText = s.thisYear;

        document.getElementById("barDayFill").style.width = `${(s.today / maxVal) * 100}%`;
        document.getElementById("barWeekFill").style.width = `${(s.thisWeek / maxVal) * 100}%`;
        document.getElementById("barMonthFill").style.width = `${(s.thisMonth / maxVal) * 100}%`;
        document.getElementById("barYearFill").style.width = `${(s.thisYear / maxVal) * 100}%`;

        new bootstrap.Modal(document.getElementById("statsModal")).show();
    } else if (pin !== null) {
        alert("Incorrect PIN.");
    }
}

function getSellerGallery(seller) {
    if (Array.isArray(seller.gallery) && seller.gallery.length > 0) {
        return seller.gallery;
    }
    if (seller.workImage) {
        return [seller.workImage];
    }
    const catMeta = CATEGORIES.find(c => c.name === seller.category);
    return catMeta ? [catMeta.image] : [];
}

function getSellers() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSellers));
        return defaultSellers;
    }
    return JSON.parse(saved);
}

function refreshCurrentView() {
    if (openedCategoryName) {
        openCategory(openedCategoryName, openedSubCategory);
    } else {
        renderCategoryCards();
        renderAllSellers();
    }
}

function deleteSeller(sellerId) {
    const pin = prompt("Enter Admin PIN to delete this business:");
    if (pin === null) return;
    if (pin !== ADMIN_PIN) {
        alert("Incorrect PIN. Business was not deleted.");
        return;
    }

    const sellers = getSellers();
    const target = sellers.find(s => s.id === sellerId);
    if (!target) return;

    const confirmed = confirm(`Remove "${target.bizName}" (${target.ownerName}) from the marketplace?`);
    if (!confirmed) return;

    const updated = sellers.filter(s => s.id !== sellerId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    refreshCurrentView();
}

function showPage(pageName) {
    document.getElementById("dashboardPage").classList.add("d-none");
    document.getElementById("categoryPage").classList.add("d-none");
    document.getElementById("requirementsPage").classList.add("d-none");

    if (pageName === "requirements") {
        document.getElementById("requirementsPage").classList.remove("d-none");
    } else if (pageName === "category") {
        document.getElementById("categoryPage").classList.remove("d-none");
    } else {
        document.getElementById("dashboardPage").classList.remove("d-none");
    }
    window.scrollTo(0, 0);
}

function openHomeDashboard() {
    openedCategoryName = null;
    openedSubCategory = "All";
    showPage("dashboard");
    renderCategoryCards();
    renderAllSellers();
}

function openCategory(categoryName, subCat = "All") {
    openedCategoryName = categoryName;
    openedSubCategory = subCat;

    const catObj = CATEGORIES.find(c => c.name === categoryName);
    const allInCat = getSellers().filter(s => s.category === categoryName);

    document.getElementById("openedCategoryImg").src = catObj ? catObj.image : "";
    document.getElementById("openedCategoryTitle").innerText = categoryName;
    document.getElementById("openedCategoryCount").innerText =
        `${allInCat.length} ${allInCat.length === 1 ? "seller" : "sellers"} in ${categoryName}`;

    document.getElementById("quickCategoryPills").innerHTML = CATEGORIES.map(cat => {
        const cls = cat.name === categoryName ? "btn-warning fw-bold text-dark" : "btn-outline-secondary";
        return `<button class="btn btn-sm ${cls}" onclick="openCategory('${cat.name}')">${cat.name}</button>`;
    }).join("");

    const subBar = document.getElementById("subCategoryBar");
    if (categoryName === "Hair & Beauty") {
        subBar.classList.remove("d-none");
        subBar.innerHTML = HAIR_BEAUTY_SUBCATEGORIES.map(sub => {
            const count = sub === "All"
                ? allInCat.length
                : allInCat.filter(s => s.subCategory === sub).length;
            const active = openedSubCategory === sub;
            const cls = active ? "btn-vut-primary fw-semibold" : "btn-outline-dark bg-white";
            return `<button class="btn btn-sm ${cls}" onclick="openCategory('Hair & Beauty', '${sub}')">${sub} (${count})</button>`;
        }).join("");
    } else {
        subBar.classList.add("d-none");
        subBar.innerHTML = "";
    }

    document.getElementById("categorySearchInput").value = "";
    showPage("category");
    renderOpenedCategorySellers();
}

function setActiveWorkPhoto(src, clickedThumb) {
    const mainImg = document.getElementById("viewWorkImg");
    mainImg.src = src;

    document.querySelectorAll("#viewWorkThumbs img").forEach(thumb => {
        thumb.style.border = "2px solid transparent";
    });
    if (clickedThumb) {
        clickedThumb.style.border = "2px solid #F4B400";
    }
}

function getMenuHeading(seller) {
    if (seller.category === "Food & Snacks") return "Food Menu & Prices:";
    if (seller.category === "Loan Sharks") return "Loan Options & Terms:";
    if (seller.category === "iPhones & Laptops") return "Devices & Prices:";
    if (seller.subCategory) return `${seller.subCategory} Price Menu:`;
    return "Menu & Prices:";
}

function openWorkModal(sellerId) {
    const seller = getSellers().find(s => s.id === sellerId);
    if (!seller) return;

    const cleanPhone = seller.phone.replace(/\s+/g, "");
    const waUrl = formatWhatsAppUrl(seller);
    const photos = getSellerGallery(seller);

    const imgEl = document.getElementById("viewWorkImg");
    const thumbsEl = document.getElementById("viewWorkThumbs");

    if (photos.length > 0) {
        imgEl.src = photos[0];
        imgEl.alt = `${seller.bizName} work`;
        imgEl.classList.remove("d-none");

        if (photos.length > 1) {
            thumbsEl.innerHTML = photos.map((src, idx) => `
                <img src="${src}" alt="Work photo ${idx + 1}"
                     onclick="setActiveWorkPhoto('${src}', this)"
                     style="width: 74px; height: 56px; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid ${idx === 0 ? '#F4B400' : 'transparent'};">
            `).join("");
        } else {
            thumbsEl.innerHTML = "";
        }
    } else {
        imgEl.src = "";
        imgEl.classList.add("d-none");
        thumbsEl.innerHTML = "";
    }

    document.getElementById("viewWorkTitle").innerText = `${seller.bizName} — Seller's Work`;
    document.getElementById("viewWorkCategory").innerText =
        seller.subCategory ? `${seller.category} • ${seller.subCategory}` : seller.category;
    document.getElementById("viewWorkPhone").innerText = "";
    document.getElementById("viewWorkOwner").innerText = seller.ownerName;
    document.getElementById("viewWorkLocation").innerText = seller.location;
    document.getElementById("viewWorkMenuLabel").innerText = getMenuHeading(seller);
    document.getElementById("viewWorkMenu").innerText = seller.itemsSold;

    document.getElementById("viewWorkCallBtn").href = `tel:${cleanPhone}`;
    document.getElementById("viewWorkWaBtn").href = waUrl;

    new bootstrap.Modal(document.getElementById("viewWorkModal")).show();
}

function buildSellerCardHTML(seller) {
    const cleanPhone = seller.phone.replace(/\s+/g, "");
    const waUrl = formatWhatsAppUrl(seller);
    const photos = getSellerGallery(seller);

    const subBadge = seller.subCategory
        ? `<span class="badge bg-warning text-dark">${seller.subCategory}</span>`
        : "";

    const carLine = seller.vehicleInfo
        ? `<div class="small mb-2"><strong>Car:</strong> ${seller.vehicleInfo}</div>`
        : "";

    const menuHeading = getMenuHeading(seller);

    const photoHtml = photos.length > 0
        ? `<img src="${photos[0]}" alt="${seller.bizName}" class="work-photo mb-3">`
        : "";

    return `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm p-3">
                <div class="d-flex justify-content-between align-items-center mb-2 gap-1">
                    <div class="d-flex flex-wrap gap-1">
                        <span class="badge badge-vut-navy">${seller.category}</span>
                        ${subBadge}
                    </div>
                    <button type="button" class="btn btn-outline-danger btn-sm py-0 px-2 fw-semibold"
                            onclick="deleteSeller(${seller.id})">Delete</button>
                </div>

                ${photoHtml}

                <h6 class="fw-bold mb-1" style="color: var(--vut-navy);">${seller.bizName}</h6>
                <div class="small mb-1"><strong>Seller:</strong> ${seller.ownerName}</div>
                <div class="text-muted small mb-2"><strong>Location:</strong> ${seller.location}</div>
                ${carLine}

                <div class="small fw-bold mb-1" style="color: var(--vut-navy);">${menuHeading}</div>
                <div class="p-2 rounded menu-box mb-3 flex-grow-1">${seller.itemsSold}</div>

                <button type="button" class="btn btn-sm btn-vut-gold w-100 mb-2" onclick="openWorkModal(${seller.id})">
                    View the Work (${photos.length} ${photos.length === 1 ? "photo" : "photos"})
                </button>

                <div class="d-flex gap-2 mt-auto">
                    <a href="tel:${cleanPhone}" class="btn btn-sm btn-outline-dark w-50 fw-semibold">Call</a>
                    <a href="${waUrl}" target="_blank" rel="noopener noreferrer"
                       class="btn btn-sm btn-success w-50 fw-semibold">WhatsApp</a>
                </div>
            </div>
        </div>
    `;
}

function renderOpenedCategorySellers() {
    const sellers = getSellers();
    const query = document.getElementById("categorySearchInput").value.toLowerCase().trim();
    const grid = document.getElementById("openedCategoryGrid");

    const filtered = sellers.filter(s => {
        if (s.category !== openedCategoryName) return false;
        if (openedCategoryName === "Hair & Beauty" && openedSubCategory !== "All") {
            if (s.subCategory !== openedSubCategory) return false;
        }
        return (
            s.bizName.toLowerCase().includes(query) ||
            s.ownerName.toLowerCase().includes(query) ||
            s.itemsSold.toLowerCase().includes(query) ||
            s.location.toLowerCase().includes(query) ||
            (s.subCategory && s.subCategory.toLowerCase().includes(query))
        );
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-12 text-muted py-4">No sellers found in this selection.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(buildSellerCardHTML).join("");
}

function renderCategoryCards() {
    const sellers = getSellers();
    document.getElementById("totalSellersText").innerText =
        `${sellers.length} ${sellers.length === 1 ? "seller" : "sellers"} total`;

    document.getElementById("categoryCardsGrid").innerHTML = CATEGORIES.map(cat => {
        const count = sellers.filter(s => s.category === cat.name).length;
        const subHint = cat.name === "Hair & Beauty"
            ? `<div class="text-muted" style="font-size: 0.72rem;">Barbershop • Hairdresser • Nail Tech</div>`
            : "";

        return `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 bg-white shadow-sm category-tile" onclick="openCategory('${cat.name}')">
                    <img src="${cat.image}" alt="${cat.name}" class="cat-img">
                    <div class="p-2 d-flex flex-column justify-content-between flex-grow-1">
                        <div>
                            <div class="fw-bold small mb-1" style="color: var(--vut-navy);">${cat.name}</div>
                            ${subHint}
                        </div>
                        <span class="badge badge-vut-navy align-self-start mt-2">${count} ${count === 1 ? "seller" : "sellers"}</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function renderAllSellers() {
    const sellers = getSellers();
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    const grid = document.getElementById("allSellersGrid");

    const filtered = sellers.filter(s =>
        s.bizName.toLowerCase().includes(query) ||
        s.ownerName.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        (s.subCategory && s.subCategory.toLowerCase().includes(query)) ||
        s.itemsSold.toLowerCase().includes(query) ||
        s.location.toLowerCase().includes(query) ||
        s.phone.includes(query)
    );

    document.getElementById("showingCountText").innerText =
        `Showing ${filtered.length} of ${sellers.length}`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-12 text-muted py-4">No matching sellers.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(buildSellerCardHTML).join("");
}

function sendVerificationEmail() {
    const name = document.getElementById("appName").value.trim() || "[Full Name]";
    const studentNum = document.getElementById("appStudentNum").value.trim() || "[VUT Student Number]";
    const bizName = document.getElementById("appBizName").value.trim() || "[Business or Ride Name]";
    const location = document.getElementById("appLocation").value.trim() || "[Location]";
    const items = document.getElementById("appItems").value.trim() || "[Items, Services, Terms & Prices]";

    const subject = `VUT Seller Verification: ${bizName} (${studentNum})`;
    const body = `Hi Admin,\n\nI want to register on VUT Marketplace.\n\n` +
                 `Name: ${name}\nStudent Number: ${studentNum}\nBusiness / Service: ${bizName}\nLocation: ${location}\n\n` +
                 `Items / Services / Terms & Prices:\n${items}\n\n[Attached: Copy of ID, VUT Student Number / Card & Work Photos]`;

    window.location.href = `mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function openAdminModal() {
    const pin = prompt("Enter Admin PIN:");
    if (pin === ADMIN_PIN) {
        onAdminCategoryChange();
        new bootstrap.Modal(document.getElementById("adminModal")).show();
    } else if (pin !== null) {
        alert("Incorrect PIN.");
    }
}

function onAdminCategoryChange() {
    const cat = document.getElementById("category").value;
    document.getElementById("subCategoryField").classList.toggle("d-none", cat !== "Hair & Beauty");
    document.getElementById("vehicleField").classList.toggle("d-none", cat !== "Transport & Rides");

    const menuLabel = document.getElementById("menuLabel");
    const photoLabel = document.getElementById("photoLabel");

    if (cat === "Food & Snacks") {
        menuLabel.innerText = "Food Menu & Prices";
        photoLabel.innerText = "Pictures of Food (Select 1 or more)";
    } else if (cat === "Hair & Beauty") {
        menuLabel.innerText = "Service Price Menu (Haircuts / Hairdressing / Nails)";
        photoLabel.innerText = "Pictures of Work (Haircut, Braids, or Nails)";
    } else if (cat === "iPhones & Laptops") {
        menuLabel.innerText = "iPhone & Laptop Models, Specs & Prices";
        photoLabel.innerText = "Pictures of iPhones & Laptops (Select 1 or more)";
    } else if (cat === "Loan Sharks") {
        menuLabel.innerText = "Loan Amounts, Repayment Terms & Requirements";
        photoLabel.innerText = "Pictures / Flyer of Offer (Select 1 or more)";
    } else {
        menuLabel.innerText = "Price Menu (Items / Services / Fares)";
        photoLabel.innerText = "Pictures of Seller's Work (Select 1 or more)";
    }
}

function saveSellerRecord(sellerObj) {
    const sellers = getSellers();
    sellers.unshift(sellerObj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sellers));

    document.getElementById("businessForm").reset();
    onAdminCategoryChange();
    bootstrap.Modal.getInstance(document.getElementById("adminModal")).hide();
    refreshCurrentView();
}

document.getElementById("businessForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const category = document.getElementById("category").value;
    const catMeta = CATEGORIES.find(c => c.name === category);
    const defaultGallery = catMeta ? [catMeta.image] : [];

    const newSeller = {
        id: Date.now(),
        bizName: document.getElementById("bizName").value,
        ownerName: document.getElementById("ownerName").value,
        studentNumber: document.getElementById("studentNumber").value,
        category: category,
        subCategory: category === "Hair & Beauty" ? document.getElementById("subCategory").value : "",
        location: document.getElementById("location").value,
        phone: document.getElementById("phone").value,
        vehicleInfo: category === "Transport & Rides" ? document.getElementById("vehicleInfo").value : "",
        itemsSold: document.getElementById("itemsSold").value,
        gallery: defaultGallery
    };

    const fileInput = document.getElementById("workImageFile");
    const files = fileInput.files ? Array.from(fileInput.files) : [];

    if (files.length > 0) {
        Promise.all(files.map(file => new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = ev => resolve(ev.target.result);
            reader.readAsDataURL(file);
        }))).then(uploadedImages => {
            newSeller.gallery = uploadedImages;
            saveSellerRecord(newSeller);
        });
    } else {
        saveSellerRecord(newSeller);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cleanAdminPhone = ADMIN_PHONE.replace(/\s+/g, "");
    const waAdminPhone = cleanAdminPhone.startsWith("0") ? "27" + cleanAdminPhone.substring(1) : cleanAdminPhone;

    document.getElementById("adminCallLink").href = `tel:${cleanAdminPhone}`;
    document.getElementById("adminWaLink").href = `https://wa.me/${waAdminPhone}?text=${encodeURIComponent("Hi Admin, I want to verify my VUT student business and send my ID & student number.")}`;
    document.getElementById("adminContactDisplay").innerText = `Email: ${ADMIN_EMAIL} • Phone: ${ADMIN_PHONE}`;

    recordAppVisit();
    renderCategoryCards();
    renderAllSellers();
});