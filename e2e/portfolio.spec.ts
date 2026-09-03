import { expect, test } from '@playwright/test';

test.describe('Heila Shahidi Portfolio Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads successfully with correct title and metadata', async ({ page }) => {
    await expect(page).toHaveTitle(/Heila Shahidi \| AI Software Engineer/);
  });

  test('displays monumental hero name and technical competencies', async ({ page }) => {
    const nameHeading = page.getByRole('heading', { level: 1 });
    await expect(nameHeading).toBeVisible();
    await expect(nameHeading).toHaveText('Heila Shahidi');

    await expect(page.getByText(/autonomous AI voice agents/i)).toBeVisible();
    await expect(page.getByRole('tab', { name: /Autonomous AI Agents/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /UT Austin • MS SE/i })).toBeVisible();

    const agentsTab = page.getByRole('tab', { name: /Autonomous AI Agents/i });
    await agentsTab.click();
    await expect(page.getByRole('tabpanel')).toBeVisible();
    await expect(page.getByText('LangChain')).toBeVisible();
  });

  test('embeds background video with looping and muted attributes', async ({ page }) => {
    const video = page.locator('video');
    await expect(video).toBeAttached();
    await expect(video).toHaveAttribute('src', '/heila_compressed.mp4');
    await expect(video).toHaveAttribute('autoplay', '');
    await expect(video).toHaveAttribute('loop', '');
    await expect(video).toHaveAttribute('playsinline', '');
  });

  test('verifies single page non-scrollable viewport constraints', async ({ page }) => {
    const isOverflowHidden = await page.evaluate(() => {
      const htmlStyle = window.getComputedStyle(document.documentElement);
      const bodyStyle = window.getComputedStyle(document.body);
      return htmlStyle.overflow === 'hidden' && bodyStyle.overflow === 'hidden';
    });
    expect(isOverflowHidden).toBe(true);

    const fitsWithinViewport = await page.evaluate(() => {
      return document.documentElement.scrollHeight <= window.innerHeight;
    });
    expect(fitsWithinViewport).toBe(true);
  });

  test('interacts with background video controls', async ({ page }) => {
    const pauseButton = page.getByRole('button', {
      name: /pause background video/i,
    });
    await expect(pauseButton).toBeVisible();
    await pauseButton.click();

    const playButton = page.getByRole('button', {
      name: /play background video/i,
    });
    await expect(playButton).toBeVisible();
    await playButton.click();

    await expect(page.getByRole('button', { name: /pause background video/i })).toBeVisible();
  });

  test('copies email on contact button click', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);

    const contactButton = page.getByRole('button', { name: /contact/i });
    await contactButton.click();

    await expect(page.getByText(/Email copied: heila\.shahidi@gmail\.com/i)).toBeVisible();
  });

  test('verifies mobile responsive viewport fits without scroll or overlap', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const nameHeading = page.getByRole('heading', { level: 1 });
    await expect(nameHeading).toBeVisible();

    const badge = page.getByText('SWE');
    await expect(badge).toBeVisible();

    const contactButton = page.getByRole('button', { name: /contact/i });
    await expect(contactButton).toBeVisible();

    const badgeBox = await badge.boundingBox();
    const contactBox = await contactButton.boundingBox();
    expect(badgeBox).not.toBeNull();
    expect(contactBox).not.toBeNull();
    if (badgeBox && contactBox) {
      expect(badgeBox.x + badgeBox.width).toBeLessThan(contactBox.x);
    }

    const fitsWithinMobileViewport = await page.evaluate(() => {
      return document.documentElement.scrollHeight <= window.innerHeight;
    });
    expect(fitsWithinMobileViewport).toBe(true);
  });

  test('captures visual screenshots for desktop and mobile verification', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'public/screenshot.png' });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'public/screenshot-mobile.png' });
  });
});
