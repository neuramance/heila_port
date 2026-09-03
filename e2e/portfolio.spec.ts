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
    const mobileSizes = [
      { width: 320, height: 568 },
      { width: 375, height: 667 },
      { width: 390, height: 844 },
      { width: 414, height: 896 },
      { width: 430, height: 932 },
    ];

    for (const size of mobileSizes) {
      await page.setViewportSize(size);
      await page.goto('/');

      const nameHeading = page.getByRole('heading', { level: 1 });
      await expect(nameHeading).toBeVisible();

      const badge = page.locator('header > div').first();
      await expect(badge).toBeVisible();

      const githubLink = page.getByRole('link', { name: 'GitHub' });
      await expect(githubLink).toBeVisible();

      const contactButton = page.getByRole('button', { name: /contact/i });
      await expect(contactButton).toBeVisible();

      const badgeBox = await badge.boundingBox();
      const githubBox = await githubLink.boundingBox();
      expect(badgeBox).not.toBeNull();
      expect(githubBox).not.toBeNull();
      if (badgeBox && githubBox) {
        expect(badgeBox.x + badgeBox.width).toBeLessThanOrEqual(githubBox.x);
      }

      const fitsHeight = await page.evaluate(() => {
        const main = document.querySelector('main');
        const mainFits = main ? main.scrollHeight <= main.clientHeight : true;
        return document.documentElement.scrollHeight <= window.innerHeight && mainFits;
      });
      expect(fitsHeight).toBe(true);

      const fitsWidth = await page.evaluate(() => {
        const main = document.querySelector('main');
        const mainFits = main ? main.scrollWidth <= main.clientWidth : true;
        return document.documentElement.scrollWidth <= window.innerWidth && mainFits;
      });
      expect(fitsWidth).toBe(true);

      const tabs = page.getByRole('tab');
      const tab0Box = await tabs.nth(0).boundingBox();
      const tab1Box = await tabs.nth(1).boundingBox();
      const tab2Box = await tabs.nth(2).boundingBox();
      const tab3Box = await tabs.nth(3).boundingBox();
      if (tab0Box && tab1Box && tab2Box && tab3Box) {
        expect(Math.abs(tab0Box.y - tab1Box.y)).toBeLessThan(5);
        expect(Math.abs(tab2Box.y - tab3Box.y)).toBeLessThan(5);
        expect(tab2Box.y).toBeGreaterThan(tab0Box.y);
      }

      const count = await tabs.count();
      for (let i = 0; i < count; i++) {
        await tabs.nth(i).click();
        await expect(page.getByRole('tabpanel')).toBeVisible();

        const fitsHeightWithCard = await page.evaluate(() => {
          const main = document.querySelector('main');
          const mainFits = main ? main.scrollHeight <= main.clientHeight : true;
          return document.documentElement.scrollHeight <= window.innerHeight && mainFits;
        });
        expect(fitsHeightWithCard).toBe(true);

        const cardBox = await page.getByRole('tabpanel').boundingBox();
        const footerBox = await page.locator('footer').boundingBox();
        expect(cardBox).not.toBeNull();
        expect(footerBox).not.toBeNull();
        if (cardBox && footerBox) {
          expect(cardBox.y + cardBox.height).toBeLessThanOrEqual(footerBox.y);
        }
      }

      const locationBadge = page.locator('footer button');
      const videoControls = page.locator('div[role="region"]');
      const locBox = await locationBadge.boundingBox();
      const controlsBox = await videoControls.boundingBox();
      expect(locBox).not.toBeNull();
      expect(controlsBox).not.toBeNull();
      if (locBox && controlsBox) {
        expect(locBox.x + locBox.width).toBeLessThanOrEqual(controlsBox.x);
      }
    }
  });

  test('captures visual screenshots for desktop and mobile verification', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'public/screenshot.png' });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'public/screenshot-mobile.png' });
  });
});
