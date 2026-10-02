<?php
require_once __DIR__ . '/includes/functions.php';

$pageTitle = 'Airbnb Clone | Find unique places to stay';
require __DIR__ . '/includes/header.php';
?>

<main>
    <section class="hero-section">
        <div class="container hero-wrap">
            <div class="hero-copy">
                <p class="eyebrow">Plan a trip that feels effortless</p>
                <h1>Find a place to stay that feels like home.</h1>
                <p class="hero-subtext">From cozy cabins to city lofts, discover stays designed for memorable trips and relaxing escapes.</p>

                <form class="search-panel" action="listings.php" method="get">
                    <div class="field-group">
                        <label>Where</label>
                        <input type="text" name="location" placeholder="Search destinations" />
                    </div>
                    <div class="field-group">
                        <label>Check in</label>
                        <input type="date" name="checkin" />
                    </div>
                    <div class="field-group">
                        <label>Check out</label>
                        <input type="date" name="checkout" />
                    </div>
                    <div class="field-group">
                        <label>Guests</label>
                        <select name="guests">
                            <option value="">Any</option>
                            <option value="2">2 guests</option>
                            <option value="4">4 guests</option>
                            <option value="6">6 guests</option>
                        </select>
                    </div>
                    <button type="submit" class="primary-btn">Search</button>
                </form>
            </div>
            <div class="hero-visual">
                <div class="floating-card card-top">
                    <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80" alt="Featured stay" />
                    <div>
                        <strong>Coastal villa</strong>
                        <span>4.9 ★ · 128 reviews</span>
                    </div>
                </div>
                <div class="floating-card card-bottom">
                    <p>Live there for a while</p>
                    <strong>2 nights · from $220</strong>
                </div>
            </div>
        </div>
    </section>

    <section class="categories container">
        <div class="section-head">
            <h2>Explore popular categories</h2>
        </div>
        <div class="category-grid">
            <div class="category-card">
                <span>🏡</span>
                <h3>Cabins</h3>
            </div>
            <div class="category-card">
                <span>🌊</span>
                <h3>Beachfront</h3>
            </div>
            <div class="category-card">
                <span>🏙️</span>
                <h3>City stays</h3>
            </div>
            <div class="category-card">
                <span>🌲</span>
                <h3>Forest cabins</h3>
            </div>
        </div>
    </section>

    <section class="container listings-section">
        <div class="section-head inline-head">
            <h2>Featured stays</h2>
            <a href="listings.php">Show all</a>
        </div>

        <div class="property-grid">
            <?php foreach ($featuredProperties as $property): ?>
                <article class="property-card">
                    <a href="property.php?id=<?= (int) $property['id'] ?>" class="card-image-link">
                        <img src="<?= htmlspecialchars($property['image']) ?>" alt="<?= htmlspecialchars($property['title']) ?>" />
                        <?php if ($property['superhost']): ?>
                            <span class="badge">Superhost</span>
                        <?php endif; ?>
                    </a>
                    <div class="card-body">
                        <div class="card-meta">
                            <span><?= htmlspecialchars($property['type']) ?></span>
                            <span>★ <?= htmlspecialchars((string) $property['rating']) ?></span>
                        </div>
                        <h3><a href="property.php?id=<?= (int) $property['id'] ?>"><?= htmlspecialchars($property['title']) ?></a></h3>
                        <p><?= htmlspecialchars($property['location']) ?></p>
                        <div class="card-footer">
                            <strong><?= formatPrice($property['price']) ?></strong>
                            <span><?= (int) $property['guests'] ?> guests</span>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </section>

    <section class="container experience-section">
        <div class="section-head">
            <h2>Airbnb makes it easy to feel at home</h2>
        </div>
        <div class="feature-grid">
            <div class="feature-box">
                <span>💬</span>
                <h3>Friendly hosts</h3>
                <p>Enjoy warm welcomes and personalized recommendations from locals who know the area best.</p>
            </div>
            <div class="feature-box">
                <span>🧳</span>
                <h3>Flexible stays</h3>
                <p>Book a home for a weekend getaway, a long workation or a full family vacation.</p>
            </div>
            <div class="feature-box">
                <span>🔒</span>
                <h3>Secure bookings</h3>
                <p>Travel with confidence thanks to secure reservations and trusted host protection.</p>
            </div>
        </div>
    </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
